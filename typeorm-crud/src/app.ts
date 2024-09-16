// import express from "express";
// // const express=require('expresss')
// import { AppDataSource } from "./config/data-source";
// import userRoutes from "./routes/userRoutes";

// const app = express();
// app.use(express.json());

// AppDataSource.initialize().then(() => {
//     console.log("Connected to database!");

//     // Use the user routes
//     app.use("/api", userRoutes);

//     app.listen(5000, () => {
//         console.log("Server is running on port 3000");
//     });
// }).catch((error) => console.log(error));
import express from "express";
import { AppDataSource } from "./config/data-source";
import userRoutes from "./routes/userRoutes";
import { errorHandler } from "./middlewares/errorHandler";  // Import the error handler

const app = express();
app.use(express.json());

AppDataSource.initialize().then(() => {
    console.log("Connected to database!");

    // Use the user routes
    app.use("/api", userRoutes);

    // Use the custom error handler
    app.use(errorHandler);

    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
}).catch((error) => console.log(error));
