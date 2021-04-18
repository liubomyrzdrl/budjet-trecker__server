import express from "express";
import bodyParser from "body-parser";
import { createConnection } from "typeorm"
// import typeormConfig from './typeorm.config'
import { PORT } from "./constants";
import cors from "cors"
import dotenv from 'dotenv'
import authRouter from "./routes/authRouter";
import entrieRouter from "./routes/entrieRouter"
import accountRouter from "./routes/accountRouter";

const main = async () => {
  const app = express()
  dotenv.config()
  await createConnection({
  type: "postgres",
  host: "ec2-54-74-156-137.eu-west-1.compute.amazonaws.com",
  port: 5432,
  username: "qzdaoiomewrxjn",
  password: "13172cbcfd564553a3d2ab072702f2e3e047e81de3fb7729c2433cb75475d856",
  database: "d6gq7vlrpd4ort",
  ssl: { rejectUnauthorized: false },
  synchronize: true,
  logging: true,
  entities: ["dist/entities/*.{ts,js}"], 

  url: "postgres://ovyiyxohepzexe:52b9f46a202624e650228cb6cd932600d0bd8b757c822824891f30c1c79444c7@ec2-54-74-156-137.eu-west-1.compute.amazonaws.com:5432/d6gq7vlrpd4ort"

 });
  app.use(cors({}))
  app.use(bodyParser.json())
  
  app.use("/", accountRouter)
  app.use("/auth", authRouter)
  app.use("/entries", entrieRouter)
  
  app.listen(PORT, () => {
    console.log(`Server listen on post:${PORT}`)
  })
}

main().catch((err) => {
  console.log(err)
})