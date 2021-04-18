import { getConnection } from "typeorm"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { Request, Response } from 'express'
import { User } from '../entities/User'


export const register = async (req: Request, res: Response) => {

  try { 
   const {  username, email, password } = req.body
   const salt = await bcrypt.genSalt(10 )
   const hashPassword = await bcrypt.hash(password, salt)

   const user = await User.createQueryBuilder()   
      .insert()
      .values({
           username,
           email, 
           password: hashPassword 
      })
      .returning('*')
      .execute()
  //   getConnection()
  //  .createQueryBuilder()
  //  .insert()
  //  .into(User)
  //  .values(
  //      , 
  //   )
  //  .returning("*")
  //  .execute() 
 console.log('User', user)
   const payload = { id: user.raw[0].id }
   const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET as string)
   res.send({ 
     data: user.raw,
     token
  
  });

  } catch (err) {
    console.log("Error", err);
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    const user =  await User.createQueryBuilder()        
        .where("user.email = :email", { email })
        .getOne()
       
        if(user) {
          const validPassword = await bcrypt.compare(password, user.password)
          if (!validPassword) {
             res.status(401).send({
            error: {
              message: "Password is wrong"
              }               
            })
          }
            const token = jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRET as string)

            res.send({ 
              data: user,
              "token": token 
            })
          
        }

    //const data = await Bank.create(req.body);
    //res.send(data);
  } catch (err) {
    console.log("Error", err);
  }
};

