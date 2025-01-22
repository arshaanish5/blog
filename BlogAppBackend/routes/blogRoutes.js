const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Middleware to parse JSON and URL-encoded data
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

function verifytoken(req,res,next){
    let token=req.headers.token;
    try {
        if(!token)
            throw 'Unauthorized access';
        else{
            let payload=jwt.verify(token,'blogapp');
            if(!payload)
            throw 'Unauthorized access';
            next();
        }
    } catch (error) {
        console.log(error);
    }
}

// Import the blog data model
const blogData = require('../model/blogData');

// Define blog routes
    // Route to get all blogs
    router.get('/blogs', async (req, res) => {
        try {
            const blogs = await blogData.find();
            res.status(200).json(blogs);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching blogs', error: error.message });
        }
    });

    // Route to create a new blog
    router.post('/addblogs',verifytoken, async (req, res) => {
        try {
            const newBlog = new blogData(req.body);
            const savedBlog = await newBlog.save();
            res.status(200).json({message:'Blog added successfully', savedBlog});
        } catch (error) {
            res.status(400).json({ message: 'Error creating blog', error: error.message });
        }
    });

     // Route to update a blog by ID
     router.put('/edit/:id',verifytoken, async (req, res) => {
        try {
            const { id } = req.params;
            const updatedBlog = await blogData.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
            if (!updatedBlog) {
                return res.status(404).json({ message: 'Blog not found' });
            }
            res.status(200).json({ message: 'Blog updated successfully', updatedBlog });
        } catch (error) {
            res.status(400).json({ message: 'Error updating blog', error: error.message });
        }
    });

    // Route to delete a blog by ID
    router.delete('/delete/:id',verifytoken, async (req, res) => {
        try {
            const { id } = req.params;
            const deletedBlog = await blogData.findByIdAndDelete(id);
            if (!deletedBlog) {
                return res.status(404).json({ message: 'Blog not found' });
            }
            res.status(200).json({ message: 'Blog deleted successfully', deletedBlog });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting blog', error: error.message });
        }
    });
module.exports = router;