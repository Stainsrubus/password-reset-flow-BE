import express from "express";
import UserController from "../controllers/users.js";

const router = express.Router();

router.post("/signup", UserController.signup);
router.post("/login", UserController.login);
router.get("/getallusers", UserController.getAllUsers);
router.get("/getusers/:id", UserController.getUserById);
router.post("/forget-password",UserController.forgetPassword)
router.post("/reset-password/:id/:token",UserController.resetPassword)
export default router;
