// import { Request, Response, NextFunction } from "express";

// // Middleware to validate fields for a PATCH request (partial update)
// export const validatePatchUser = (req: Request, res: Response, next: NextFunction) => {
//   const { firstName, lastName, email, password } = req.body;

//   // Validate only if fields are present in the request body
//   if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//     return res.status(400).json({ message: "Invalid email format" });
//   }

//   // Optional: Add additional validation for fields like password, name lengths, etc.
//   // For example, password must be at least 6 characters
//   if (password && password.length < 6) {
//     return res.status(400).json({ message: "Password must be at least 6 characters long" });
//   }

//   next();  // Proceed to the controller if all validations pass
// };
import { Request, Response, NextFunction } from "express";
import { userPatchSchema } from "./joiSchemas"; // Import Joi schema for PATCH

// Middleware to validate the partial user schema (PATCH)
export const validatePatchUser = (req: Request, res: Response, next: NextFunction) => {
  const { error } = userPatchSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next(); // Proceed if validation passes
};
