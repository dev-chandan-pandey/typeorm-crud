import express from "express";
// const express=require('expresss')
import { AppDataSource } from "./config/data-source";
import userRoutes from "./routes/userRoutes";

const app = express();
app.use(express.json());

AppDataSource.initialize().then(() => {
    console.log("Connected to database!");

    // Use the user routes
    app.use("/api", userRoutes);

    app.listen(5000, () => {
        console.log("Server is running on port 3000");
    });
}).catch((error) => console.log(error));
