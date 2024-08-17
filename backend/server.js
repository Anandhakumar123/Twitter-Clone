// console.log("Hi, I am Anandh");

import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js;
import postRoutes from "./routes/post.route.js;
import connectMongoDB from "./db/connectMongoDB.js";

const app = express();
dotenv.config();
// console.log(process.env.MONGO_URI);

cloudinary.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const PORT = process.env.PORT || 3000;

app.use(express.json()); // parse req.body
app.use(express.urlencoded({ extended: true })); //to parse form data(url encoded)

app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(PORT, () => {
  console.log(`Server Running on the Port ${PORT}`);
  connectMongoDB();
});
