import { Request, Response } from 'express'
import { User } from '../entities/User'
// import bcrypt from 'bcryptjs'
// import jwt from 'jsonwebtoken'

export const reg = async (req: Request, res: Response) => {

  try { 
   const {  username, email, password } = req.body
//    const hashPassword = await bcrypt.hash(password, 'ddddsdf')

   const user = await User.createQueryBuilder()   
      .insert()
      .values({
           username,
           email, 
           password
      })
      .returning('*')
      .execute()

//    const payload = { id: user.raw[0].id }
//    const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET as string)
   res.send({ 
     data: user.raw[0],
   });

  } catch (err) {
    console.log("Error", err);
  }
}

// export const log = async (req: Request, res: Response) => {
//   try {
//     const { email, password } = req.body
//     const user =  await User.createQueryBuilder()        
//         .where("user.email = :email", { email })
//         .getOne()
       
//         if(user) {
//           const validPassword = await bcrypt.compare(password, user.password)
//           if (!validPassword) {
//              res.status(401).send({
//             error: {
//               message: "Password is wrong"
//               }               
//             })
//           }
//             //const token = jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRET as string)

//             res.send({ 
//               data: user,
//               "token": token 
//             })
          
//         }

//   } catch (err) {
//     console.log("Error", err);
//   }
// };

