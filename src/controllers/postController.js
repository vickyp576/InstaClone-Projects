require("dotenv").config();
const Post = require("../models/post");
const {GridFSBucket, MongoClient} = require("mongodb");
const mongoClient = new MongoClient(process.env.DATABASE_URL);

const controller = {};

controller.get = async (req, res) => {
    try {
        let posts = await Post.find();
        res.status(200).json({status : "Success", data : posts});
    } catch (err) {
        res.status(400).json({status : "Failed", message : err.message});
    }
}

controller.post = async (req, res) => {
    try {
        let newPost = await new Post({
            ...req.body,
            PostImage : `images/${req.file.filename}`
        })
        newPost = await newPost.save();
        res.status(201).json({status : "Success", data : newPost});
    } catch (err) {
        res.status(400).json({status : "Failed", message : err.message});
    }
}

controller.download = async (req, res) => {
    
    try {
        await mongoClient.connect();
        const db = mongoClient.db(process.env.DB_NAME);
        const bucket = new GridFSBucket(db, {
            bucketName : process.env.DB_COLLECTION
        });

        const image = bucket.openDownloadStreamByName(req.params.name);
        image.on("data", data => res.status(200).write(data));
        image.on("error", err => res.status(400).send({msg : err.message}));
        image.on("end", () => res.end());
    } catch(err) {
        res.status(500).send({msg : err.message});
    }
}

// controller.put = async (req, res) => {
//     try {
//         let post = await Post.findById(req.params.id)
//         if(!post) return res.status(404).json({status : "Failed", message : "Invalid Id"});
//         if(post.user == req.loginUser.userId) {
//             let updated = await Post.findByIdAndUpdate(req.params.id, req.body, {new : true});
//             res.status(200).json({status : "Success"});
//         } else {
//             res.status(401).json({status : "Failed", message : "Unauthorized"});
//         }
        
//     } catch (err) {
//         res.status(400).json({status : "Failed", message : err.message});
//     }
// }

// controller.delete = async (req, res) => {
//     try {
//         let post = await Post.findById(req.params.id)
//         if(!post) return res.status(404).json({status : "Failed", message : "Invalid Id"});
//         if(post.user == req.loginUser.userId) {
//             let updated = await Post.findByIdAndDelete(req.params.id);
//             res.status(200).json({status : "Successfully deleted"});
//         } else {
//             res.status(401).json({status : "Failed", message : "Unauthorized"});
//         }
        
//     } catch (err) {
//         res.status(400).json({status : "Failed", message : err.message});
//     }
// }


module.exports = controller;