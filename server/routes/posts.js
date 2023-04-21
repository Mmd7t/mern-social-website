import express from "express";
import { getPosts, getPost, deletePost, updatePost, likePost, getFeedPosts } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/:userId/posts", verifyToken, getPosts);
router.get("/", verifyToken, getFeedPosts);
router.get("/:postId", verifyToken, getPost);
router.patch("/:postId", verifyToken, updatePost);
router.patch("/:postId/like", verifyToken, likePost);
router.delete("/:postId", verifyToken, deletePost);

export default router;