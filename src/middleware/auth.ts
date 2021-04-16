import {  Response, NextFunction } from "express"
import  jwt from 'jsonwebtoken'

export const verifyToken = (req: any, res: Response, next: NextFunction ) => {

    let token = req.headers.authorization    
    if(!token) return res.status(401).send("Access Denied / Unauthorized request")
    try {
        console.log(token);
        token = token.split(' ')[1] 
      
        if (token === 'null' || !token) return res.status(401).send('Unauthorized request')
        try {
            let verifiedUser = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string)
            console.log('verifiedUser',  verifiedUser)
            if (!verifiedUser) return res.status(401).send('Unauthorized request')
            req.body = { id: verifiedUser.id }
        } catch (error) {
            console.log('err', error)
        }      
        next()
        
    } catch (error) {
        res.status(400).send("Invalid token")
    }
}