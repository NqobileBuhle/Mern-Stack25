import asyncHandler from "express-async-handler";
import generateToken from "../Utils/generateToken.js";
import User from "../models/UserModel.js";

// 🔹 Auth User / Set Token
const userAuth = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth user" });
});

// 🔹 Register a New User
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Check if user already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Create New User
  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res,user._id)
    res.status(201).json({
       
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// 🔹 Logout User
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logout User" });
});

// 🔹 Get User Profile
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User Profile" });
});

// 🔹 Update User Profile
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update user profile" });
});

export { userAuth, registerUser, logoutUser, getUserProfile, updateUserProfile };
