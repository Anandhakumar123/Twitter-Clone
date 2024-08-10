// console.log("Hi, I am Anandh");

import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";

const app = express();
dotenv.config();
// console.log(process.env.MONGO_URI);

const PORT = process.env.PORT || 3000;

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server Running on the Port ${PORT}`);
  connectMongoDB();
});
