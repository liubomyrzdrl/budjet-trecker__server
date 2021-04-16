import {  Response, NextFunction } from "express"
import  jwt from 'jsonwebtoken'

 
export const verifyToken = (req: any, res: Response, next: NextFunction ) => {

    let token = req.headers.authorization    
    if(!token)  res.status(401).send("Access Denied / Unauthorized request")
    try {
        console.log(token);
        token = token.split(' ')[1] 
      
        if (token === 'null' || !token) res.status(401).send('Unauthorized request')
        try {
            let verifiedUser: any  = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string)
            const { id  } = verifiedUser
            
            if (!verifiedUser) res.status(401).send('Unauthorized request')
            req.body = { id: Number(id)}
        } catch (error) {
            console.log('err', error)
        }      
        next()
        
    } catch (error) {
        res.status(400).send("Invalid token")
    }
}