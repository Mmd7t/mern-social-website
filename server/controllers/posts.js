import Post from "../models/post.js";
import User from "../models/user.js";
import mongoose from "mongoose";


//*ANCHOR --> Create Post
export const createPost = async (req, res) => {
    try {
        const { userId, description, picturePath } = req.body;
        const user = User.findById(userId);
        const newPost = Post({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            userPicturePath: user.picturePath,
            picturePath,
            likes: {},
            comments: [],
        });
        await newPost.save();

        const post = await Post.find();

        res.status(201).json(post);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

//*ANCHOR --> Get Feed Posts
export const getFeedPosts = async (req, res) => {
    try {
        const post = await Post.find();

        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//*ANCHOR --> Get User Posts
export const getPosts = async (req, res) => {
    try {
        const { userId } = req.params;
        const post = await Post.find({ userId });

        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//*ANCHOR --> Get Post
export const getPost = async (req, res) => {
    try {
        const { postId } = req.params;
        const post = await Post.findById(postId);

        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//*ANCHOR --> Update Like Post
export const likePost = async (req, res) => {
    try {
        const { id, userId } = req.params;
        const post = await Post.findById(id);
        const isLiked = post.likes.get(userId);

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

        if (isLiked) {
            post.likes.delete(userId);
        } else {
            post.likes.set(userId, true);
        }

        const updatedPost = await Post.findByIdAndUpdate(id, { likes: post.likes }, { new: true });

        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//*ANCHOR --> Update Post
export const updatePost = async (req, res) => {
    try {
        const { id, userId } = req.params;
        const { description, picturePath } = req.body;
        const post = await Post.findById(id);

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

        post.description = description;
        post.picturePath = picturePath;


        const updatedPost = await Post.findByIdAndUpdate(id, { description: post.description, picturePath: post.picturePath }, { new: true });

        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//*ANCHOR --> Delete Post
export const deletePost = async (req, res) => {
    try {
        const { postId } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

        await Post.findByIdAndRemove(postId);

        res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}