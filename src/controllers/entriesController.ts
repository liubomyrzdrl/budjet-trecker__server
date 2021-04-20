import { Request, Response } from 'express'
import { Entrie } from '../entities/Entrie'
import { getConnection } from 'typeorm'

export const get = async ( req: Request, res: Response) => {
    try {
      const { userId, date } = req.query
    
      const entries = await Entrie.query(`
          SELECT * FROM entrie e WHERE e."userId"= $1 and e.date= $2
      `,[userId, date])
      res.send(entries)
    } catch (error) {
      console.log('Error', error)  
    }
  }

export const create = async ( req: Request, res: Response) => {
    try {
      const { catagorie, amount, userId, date } = req.body
      const createdUser = await Entrie.create({
          catagorie,
          amount,
          userId,
          date
        }).save()
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
        res.send(updatedUser.raw[0])
      
    } catch (error) {
      console.log('Error', error)  
    }
  }

  export const del = async ( req: Request, res: Response) => {
    try {
      const { id } = req.query
     
      await Entrie.delete({  id: Number(id)  })
      res.send(true)
    } catch (error) {
      console.log('Error', error)  
    }
  }