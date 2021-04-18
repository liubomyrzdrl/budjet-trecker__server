import { Request, Response } from 'express'
import { User } from 'src/entities/User'


export const reg = async (req: Request, res: Response) => {

  try { 
   const {  username, email, password } = req.body


   const user = await User.createQueryBuilder()   
      .insert()
      .values({
           username,
           email, 
           password
      })
      .returning('*')
      .execute()

   res.send({ 
    data: user.raw,
  });

  } catch (err) {
    console.log("Error", err);
  }
}
