// import { Request, Response, NextFunction } from "express";

// // Middleware to validate user input
// export const validateUser = (req: Request, res: Response, next: NextFunction) => {
//   const { firstName, lastName, email, password } = req.body;

//   if (!firstName || !lastName || !email || !password) {
//     return res.status(400).json({ message: "Missing required fields" });
//   }

//   // Simple email format validation
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     return res.status(400).json({ message: "Invalid email format" });
//   }

//   next(); // Move to the next middleware or controller
// };
import { Request, Response, NextFunction } from "express";
import { userSchema } from "./joiSchemas"; // Import Joi schema

// Middleware to validate the full user schema (POST and PUT)
export const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const { error } = userSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next(); // Proceed if validation passes
};
