import express, { Router } from "express"
import { reg } from '../controllers/testController'

const router: Router = express.Router()
        router.route("/reg").post(reg)
export default router;
