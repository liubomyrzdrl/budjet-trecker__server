import jwt from 'jsonwebtoken'
import { Request, Response } from 'express'
import { User } from '../entities/User'
import argon2 from 'argon2'

export const register = async (req: Request, res: Response) => {
  try { 
   const {  username, email, password } = req.body 
   const hashedPassword = await argon2.hash(password)

   const user = await User.createQueryBuilder("user")   
      .insert()
      .values({
           username,
           email, 
           password: hashedPassword 
      })
      .returning('*')
      .execute()
      console.log("")
   const payload = { id: user.raw[0].id }
   const token = jwt.sign(payload, "sdfgsdfgsdfgsdfg")
 
   res.send({ 
     data: user.raw[0],
     token
     })  

  } catch (err) {
    console.log("Error", err);
    res.status(401).send({
      error: {
        message: `User already exist`
        }               
      })
    
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    const user =  await User.createQueryBuilder("user")        
        .where("user.email = :email", { email })
        .getOne()
        if(user) {
          const validPassword =  await argon2.verify( user.password,password,)
         
          if (!validPassword) {
             res.status(401).send({
            error: {
              message: "Password is wrong"
              }               
            })
          }
            const token = jwt.sign({ id: user.id }, "sdfgsdfgsdfgsdfg")

            res.send({ 
              data: user,
              token 
            })
          
        } else {
          res.status(401).send({
            error: {
              message: "User not found"
              }               
            })
        }

  } catch (err) {
    console.log("Error", err);
  }
};

