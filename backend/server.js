// console.log("Hi, I am Anandh");

import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";

const app = express();
dotenv.config();
// console.log(process.env.MONGO_URI);

const PORT = process.env.PORT || 3000;

app.use(express.json()); // parse req.body
app.use(express.urlencoded({ extended: true })); //to parse form data(url encoded)

app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server Running on the Port ${PORT}`);
  connectMongoDB();
});
