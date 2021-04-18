import { Request, Response } from 'express'
import { User } from 'src/entities/User'
// import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export const reg = async (req: Request, res: Response) => {

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
 
//    const payload = { id: user.raw[0].id }
//    const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET as string)
   res.send({ 
    data: user.raw,
  });

  } catch (err) {
    console.log("Error", err);
  }
}
