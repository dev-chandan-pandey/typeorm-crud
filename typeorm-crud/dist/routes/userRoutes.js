"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
// Define routes and map them to the controller functions
router.post("/users", userController_1.createUser);
router.get("/users", userController_1.getUsers);
router.get("/users/:id", userController_1.getUserById);
router.put("/users/:id", userController_1.updateUser);
router.delete("/users/:id", userController_1.deleteUser);
exports.default = router;
