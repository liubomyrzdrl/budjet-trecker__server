import {  Response } from 'express'
import { getConnection } from "typeorm"
import { User } from '../entities/User'

export const account = async ( req: any, res: Response) => {
    try {
        const { id } = req.body
        const user = await getConnection()
        .getRepository(User)
        .createQueryBuilder("user")
        .where("user.id = :id", { id })
        .getOne()      
        res.status(200).send({ 
            data: user          
        })
    } catch (error) {
        console.log("Error", error)
    }
  }