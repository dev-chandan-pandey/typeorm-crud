import { AppDataSource } from "../config/data-source";
import { User } from "../models/userEntity";
// Utility to save a user
export const saveUser = async (userData: Partial<User>): Promise<User> => {
  const user = new User();
  Object.assign(user, userData);  // Copy user data to the user entity
  return await AppDataSource.manager.save(user);
};
// Utility to find all users
export const findAllUsers = async (): Promise<User[]> => {
  return await AppDataSource.manager.find(User);
};
// Utility to find a user by ID
export const findUserById = async (id: number): Promise<User | null> => {
  return await AppDataSource.manager.findOneBy(User, { id });
};
// Utility to delete a user by ID
export const deleteUserById = async (id: number): Promise<boolean> => {
  const result = await AppDataSource.manager.delete(User, id);
  return result.affected === 1;  // Return true if the user was deleted
};
