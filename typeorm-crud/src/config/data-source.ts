// import { DataSource } from "typeorm";
// import { User } from "../models/userEntity";

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
import { DataSource } from "typeorm";
import { User } from "../models/userEntity";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    database: "cdndb",
    username: "root",       // Ensure this is correct
    password: "fw28_022",   // Ensure this is correct
    synchronize: false,
    port: 3306,
    logging: true,
    entities: [User],
    

});
