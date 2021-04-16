import express, { Router } from "express"
import { get, create, update, del  } from '../controllers/entriesController'
import { verifyToken } from "../middleware/auth";

const router: Router = express.Router()      
        router.get("/get", get)
        router.route("/create").post(create)     
   
        router.put("/update",  update)     
        router.delete("/delete", del)     


export default router;
