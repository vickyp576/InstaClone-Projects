const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    likes : {
        type : Number,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    PostImage : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true,
    },
    id : {
        type : Number,
        required : true
    }
}, {timestamps : true});

const Post = new mongoose.model("posts", postSchema);

module.exports = Post;