require("dotenv").config();
const express = require("express");
const router = express.Router();
const controller = require("../controllers/postController");
const multer = require("multer");
const {GridFsStorage} = require("multer-gridfs-storage");

const Storage = new GridFsStorage({
    url : process.env.DATABASE_URL+process.env.DB_NAME,
    file : (req, file ) => {
        return {
            bucketName : process.env.DB_COLLECTION,
            filename : `${Date.now()}_${file.originalname}`
        }
    } 
})

const upload = multer({
    storage : Storage
})

//TO GET ALL POSTS
router.get("/posts", controller.get);
//TO CREATE NEW POST
router.post("/post", upload.single("PostImage") ,controller.post);
//TO CREATE NEW POST
router.get("/images/:name",controller.download);

// //TO UPDATE
// router.put("/posts/:id", controller.put);
// //TO DELETE
// router.delete("/posts/:id", controller.delete);


module.exports = router;