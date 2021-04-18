import express from "express";
import bodyParser from "body-parser";
import { createConnection } from "typeorm"
// import typeormConfig from './typeorm.config'
import { PORT } from "./constants";
import cors from "cors"
import dotenv from 'dotenv'
import authRouter from "./routes/authRouter";
import entrieRouter from "./routes/entrieRouter";
import accountRouter from "./routes/accountRouter";

const main = async () => {
  const app = express()
  dotenv.config()
  await createConnection({
  type: "postgres",
  host: "ec2-52-50-171-4.eu-west-1.compute.amazonaws.com",
  port: 5432,
  username: "qzdaoiomewrxjn",
  password: "13172cbcfd564553a3d2ab072702f2e3e047e81de3fb7729c2433cb75475d856",
  database: "dcuva41horg1mv",
  ssl: { rejectUnauthorized: false },
  synchronize: true,
  logging: true,
  entities: ["dist/entities/*.{ts,js}"], 
  url: "postgres://qzdaoiomewrxjn:13172cbcfd564553a3d2ab072702f2e3e047e81de3fb7729c2433cb75475d856@ec2-52-50-171-4.eu-west-1.compute.amazonaws.com:5432/dcuva41horg1mv"

 });
  app.use(cors({}))
  app.use(bodyParser.json())
  
  app.use("/", accountRouter)
  app.use("/auth", authRouter)
  app.use("/entries", entrieRouter)

  app.get("/", (_, res) =>  {
      res.send('Test')
  })
  
  app.listen(PORT, () => {
    console.log(`Server listen on post:${PORT}`)
  })
}

main().catch((err) => {
  console.log(err)
})