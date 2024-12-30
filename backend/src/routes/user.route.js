import express from "express";
import {
  loginUser,
  registerUser,
  loginAdmin,
} from "../controllers/auth.controller.js";

const userRouter = express.Router();

// register user

userRouter.post("/register", registerUser);

// login user

userRouter.post("/login", loginUser);

// login admin

userRouter.post("/admin", loginAdmin);

export default userRouter;
