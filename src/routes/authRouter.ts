import express, { Router } from "express"
import { register,login  } from '../controllers/authController'

const router: Router = express.Router();
        router.route("/login").post(login)
        router.route("/register").post(register)


export default router;
