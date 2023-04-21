import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import multer from "multer";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import { register } from "./controllers/auth.js";
import { createPost } from "./controllers/posts.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import User from "./models/user.js";
import Post from "./models/post.js";
import { posts, users } from "./data/index.js";

/*---- CONFIGURATIONS ----*/
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, 'public/assets')));

/*---- FILE STORAGE ----*/
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/assets");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });

/*---- ROUTES WITH FILES ----*/
app.post("/auth/register", upload.single('picture'), register);
app.post("/posts", upload.single('picture'), createPost);

/*---- ROUTES ----*/
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

/*---- MONGOOSE SETUP ----*/
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server Running Successfully on Port ${PORT}`))

    //* --> Add Data one time
    // User.insertMany(users);
    // Post.insertMany(posts);
}).catch((err) => console.log(err)); 