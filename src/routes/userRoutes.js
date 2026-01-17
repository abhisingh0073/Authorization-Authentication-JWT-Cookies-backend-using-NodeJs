import express from "express"
import userController from "../controllers/userController.js";
const { handleLogin, handleSignUp } = userController;


const router = express.Router();

router.post("/signup", handleSignUp);
router.post("/login", handleLogin);


export default router