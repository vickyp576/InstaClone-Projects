require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const postRouter = require("./routers/postRouter");

app.use(cors({
    origin : "*"
}))
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use("/", postRouter);

module.exports = app;