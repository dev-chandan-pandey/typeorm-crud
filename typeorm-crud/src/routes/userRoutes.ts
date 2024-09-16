// import { Router } from "express";
// import { createUser, getUsers, getUserById, updateUser, deleteUser } from "../controllers/userController";

// const router = Router();

// // Define routes and map them to the controller functions
// router.post("/users", createUser);
// router.get("/users", getUsers);
// router.get("/users/:id", getUserById);
// router.put("/users/:id", updateUser);
// router.delete("/users/:id", deleteUser);

// export default router;

// import { Router } from "express";
// import { createUser, getUsers, getUserById, updateUser, deleteUser } from "../controllers/userController";
// import { validateUser } from "../middlewares/validateUser";  // Import the validation middleware

// const router = Router();

// // Use validation middleware before creating and updating a user
// router.post("/users", validateUser, createUser);
// router.put("/users/:id", validateUser, updateUser);

// router.get("/users", getUsers);
// router.get("/users/:id", getUserById);
// router.delete("/users/:id", deleteUser);

// export default router;

import { Router } from "express";
import { createUser, getUsers, getUserById, updateUser, deleteUser, patchUser } from "../controllers/userController";
import { validateUser } from "../middlewares/validateUser";     // Full update validation
import { validatePatchUser } from "../middlewares/validatePatchUser";  // New patch validation
const router = Router();
// Define routes
router.post("/users", validateUser, createUser);
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.put("/users/:id", validateUser, updateUser);   // Full update validation
router.patch("/users/:id", validatePatchUser, patchUser);  // Patch request validation
router.delete("/users/:id", deleteUser);

export default router;

