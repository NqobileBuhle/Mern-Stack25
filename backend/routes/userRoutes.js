import express from "express";
import { userAuth,registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile } from "../controllers/userController.js";

const router=express.Router();
router.post("/auth",userAuth)
router.post("/",registerUser)
router.post("/logout",logoutUser)
// router.get("/profile",getUserProfile)
// router.put("/profile",updateUserProfile)
router.route('/profile').get(getUserProfile).put(updateUserProfile);










export default router;
