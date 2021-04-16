import { Request, Response } from 'express'
import { Entrie } from '../entities/Entrie'
import { getConnection } from 'typeorm'

export const get = async ( req: Request, res: Response) => {
    try {
      const { userId } = req.query
     
        const entries = await Entrie.query(`
           SELECT * FROM entrie e WHERE e."userId"=${userId}
        `)
        console.log('entries', entries)
      res.send(entries)
    } catch (error) {
      console.log('Error', error)  
    }
  }

export const create = async ( req: Request, res: Response) => {
    try {
      const { catagorie, amount, userId } = req.body
      console.log('CREATE',catagorie, amount)
        const createdUser = await Entrie.create({
          catagorie,
          amount,
          userId
        }).save()
        console.log('CREATE ENTREIES', createdUser)
        res.send(createdUser)
      
    } catch (error) {
      console.log('Error', error)  
    }
  }
  
  export const update = async ( req: Request, res: Response) => {
    try {
        const { catagorie, amount, id } = req.body
        const updatedUser = await getConnection()
            .createQueryBuilder()
            .update(Entrie)
            .set({
              catagorie,
              amount,
            }) 
            .where("id = :id", { id })
            .returning("*")
            .execute()  
      
            console.log('updatedUser', updatedUser)
        res.send(updatedUser.raw[0])
      
    } catch (error) {
      console.log('Error', error)  
    }
  }

  export const del = async ( req: Request, res: Response) => {
    try {
      const { id } = req.query
      console.log('DEL', id)
       await Entrie.delete({ id })
        // const entries =await Entrie.query(`
        //    SELECT * FROM entrie e WHERE e."userId"=1
        // `)
       
      res.send(true)
    } catch (error) {
      console.log('Error', error)  
    }
  }