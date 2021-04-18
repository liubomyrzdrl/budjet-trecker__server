import {  Response } from 'express'
import { getConnection } from "typeorm"
import { User } from '../entities/User'

export const account = async ( req: any, res: Response) => {

    try {
        // const user = await User.createQueryBuilder()
        // .where("user.id = :id", { id })
        // .getOne()   

        // res.status(200).send({ 
        //     data: user          
        // })
        const user = await getConnection()
        .getRepository(User)
        .createQueryBuilder("user")
        .where("user.id = :id", { id: Number(req.user.id)})
        .getOne()      
        res.send({ 
            data: user          
        })
    } catch (error) {
        console.log("Error", error)
    }
  }