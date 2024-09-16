import Joi from 'joi';

// Full schema: Used for POST and PUT (all fields required)
export const userSchema = Joi.object({
  firstName: Joi.string().min(2).required(),
  lastName: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(5).required(),
});

// Partial schema: Used for PATCH (all fields optional, but must be valid if provided)
export const userPatchSchema = Joi.object({
  firstName: Joi.string().min(2),
  lastName: Joi.string().min(2),
  email: Joi.string().email(),
  password: Joi.string().min(5),
});
