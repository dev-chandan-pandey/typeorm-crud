"use strict";
// import { DataSource } from "typeorm";
// import { User } from "../models/userEntity";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
// export const AppDataSource = new DataSource({
//     type:"mysql",
//     host:"localhost",
//     database:"cdndb",
//     username:"root",
//     password:"fw28_022",
//     synchronize:true,
//     port:3306,
//     logging:true,
//     entities: [User],
// });
const typeorm_1 = require("typeorm");
const userEntity_1 = require("../models/userEntity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    database: "cdndb",
    username: "root", // Ensure this is correct
    password: "fw28_022", // Ensure this is correct
    synchronize: false,
    port: 3306,
    logging: true,
    entities: [userEntity_1.User],
});
