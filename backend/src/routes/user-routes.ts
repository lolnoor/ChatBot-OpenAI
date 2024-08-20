import { Router } from "express";
import { getAllUsers, usersignup} from "../controllers/user-controller.js";

const userRoutes = Router();

userRoutes.get("/", getAllUsers)
userRoutes.post("/signup", usersignup)

export default userRoutes;