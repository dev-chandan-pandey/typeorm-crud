"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUserById = exports.getUsers = exports.createUser = void 0;
const data_source_1 = require("../config/data-source");
const userEntity_1 = require("../models/userEntity");
// Create a new user
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, email, password } = req.body;
    const user = new userEntity_1.User();
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.password = password;
    try {
        const savedUser = yield data_source_1.AppDataSource.manager.save(user);
        return res.status(201).json(savedUser);
    }
    catch (error) {
        return res.status(500).json({ message: "Error saving user", error });
    }
});
exports.createUser = createUser;
// Get all users
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield data_source_1.AppDataSource.manager.find(userEntity_1.User);
        return res.status(200).json(users);
    }
    catch (error) {
        return res.status(500).json({ message: "Error retrieving users", error });
    }
});
exports.getUsers = getUsers;
// Get user by ID
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield data_source_1.AppDataSource.manager.findOneBy(userEntity_1.User, { id: parseInt(req.params.id) });
        if (user) {
            return res.status(200).json(user);
        }
        else {
            return res.status(404).json({ message: "User not found" });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "Error retrieving user", error });
    }
});
exports.getUserById = getUserById;
// Update user by ID
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, email, password } = req.body;
    try {
        const user = yield data_source_1.AppDataSource.manager.findOneBy(userEntity_1.User, { id: parseInt(req.params.id) });
        if (user) {
            user.firstName = firstName;
            user.lastName = lastName;
            user.email = email;
            user.password = password;
            const updatedUser = yield data_source_1.AppDataSource.manager.save(user);
            return res.status(200).json(updatedUser);
        }
        else {
            return res.status(404).json({ message: "User not found" });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "Error updating user", error });
    }
});
exports.updateUser = updateUser;
// Delete user by ID
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield data_source_1.AppDataSource.manager.delete(userEntity_1.User, req.params.id);
        if (result.affected === 1) {
            return res.status(204).send();
        }
        else {
            return res.status(404).json({ message: "User not found" });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "Error deleting user", error });
    }
});
exports.deleteUser = deleteUser;
