"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import express from "express";
const express = require('expresss');
const data_source_1 = require("./config/data-source");
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const app = express();
app.use(express.json());
data_source_1.AppDataSource.initialize().then(() => {
    console.log("Connected to database!");
    // Use the user routes
    app.use("/api", userRoutes_1.default);
    app.listen(5000, () => {
        console.log("Server is running on port 3000");
    });
}).catch((error) => console.log(error));
