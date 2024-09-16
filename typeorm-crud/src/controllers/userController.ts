// import { Request, Response } from "express";
// import { AppDataSource } from "../config/data-source";
// import { User } from "../models/userEntity";

// // Create a new user
// export const createUser = async (req: Request, res: Response) => {
//     const { firstName, lastName, email, password } = req.body;
//     const user = new User();
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.password = password;

//     try {
//         const savedUser = await AppDataSource.manager.save(user);
//         return res.status(201).json(savedUser);
//     } catch (error) {
//         return res.status(500).json({ message: "Error saving user", error });
//     }
// };

// // Get all users
// export const getUsers = async (req: Request, res: Response) => {
//     try {
//         const users = await AppDataSource.manager.find(User);
//         return res.status(200).json(users);
//     } catch (error) {
//         return res.status(500).json({ message: "Error retrieving users", error });
//     }
// };

// // Get user by ID
// export const getUserById = async (req: Request, res: Response) => {
//     try {
//         const user = await AppDataSource.manager.findOneBy(User, { id: parseInt(req.params.id) });
//         if (user) {
//             return res.status(200).json(user);
//         } else {
//             return res.status(404).json({ message: "User not found" });
//         }
//     } catch (error) {
//         return res.status(500).json({ message: "Error retrieving user", error });
//     }
// };

// // Update user by ID
// export const updateUser = async (req: Request, res: Response) => {
//     const { firstName, lastName, email, password } = req.body;
//     try {
//         const user = await AppDataSource.manager.findOneBy(User, { id: parseInt(req.params.id) });
//         if (user) {
//             user.firstName = firstName;
//             user.lastName = lastName;
//             user.email = email;
//             user.password = password;

//             const updatedUser = await AppDataSource.manager.save(user);
//             return res.status(200).json(updatedUser);
//         } else {
//             return res.status(404).json({ message: "User not found" });
//         }
//     } catch (error) {
//         return res.status(500).json({ message: "Error updating user", error });
//     }
// };

// // Delete user by ID
// export const deleteUser = async (req: Request, res: Response) => {
//     try {
//         const result = await AppDataSource.manager.delete(User, req.params.id);
//         if (result.affected === 1) {
//             return res.status(204).send();
//         } else {
//             return res.status(404).json({ message: "User not found" });
//         }
//     } catch (error) {
//         return res.status(500).json({ message: "Error deleting user", error });
//     }
// };
import { Request, Response } from "express";
import { saveUser, findAllUsers, findUserById, deleteUserById } from "../utils/userUtils";

// Create a new user
export const createUser = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password } = req.body;
  const userData = { firstName, lastName, email, password };  // Data from request body

  try {
    const savedUser = await saveUser(userData);  // Reusing the saveUser utility function
    return res.status(201).json(savedUser);
  } catch (error) {
    return res.status(500).json({ message: "Error saving user", error });
  }
};

// Get all users
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await findAllUsers();  // Reusing the findAllUsers utility function
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: "Error retrieving users", error });
  }
};

// Get user by ID
export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await findUserById(parseInt(req.params.id));  // Reusing the findUserById utility function
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error retrieving user", error });
  }
};

// Update user by ID
export const updateUser = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const user = await findUserById(parseInt(req.params.id));  // Reusing the findUserById utility function
    if (user) {
      const updatedUser = await saveUser({ ...user, firstName, lastName, email, password });
      return res.status(200).json(updatedUser);  // Reusing the saveUser utility function for update
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error updating user", error });
  }
};

// Delete user by ID
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const deleted = await deleteUserById(parseInt(req.params.id));  // Reusing the deleteUserById utility function
    if (deleted) {
      return res.status(204).send();
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error deleting user", error });
  }
};

// Patch (partial update) a user by ID
export const patchUser = async (req: Request, res: Response) => {
    const { firstName, lastName, email, password } = req.body;
  
    try {
      const user = await findUserById(parseInt(req.params.id));
  
      if (user) {
        if (firstName) user.firstName = firstName;
        if (lastName) user.lastName = lastName;
        if (email) user.email = email;
        if (password) user.password = password;
  
        const updatedUser = await saveUser(user);
        return res.status(200).json(updatedUser);
      } else {
        return res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      return res.status(500).json({ message: "Error updating user", error });
    }
  };