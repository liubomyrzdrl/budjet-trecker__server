import express, { Router } from "express"
import { account } from '../controllers/accountController'
import { verifyToken } from "../middleware/auth";

const router: Router = express.Router()   
        router.route("/account").get(verifyToken, account)         

export default router;
