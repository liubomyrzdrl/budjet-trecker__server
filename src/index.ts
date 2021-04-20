import express from "express";
import bodyParser from "body-parser";
import { createConnection } from "typeorm"
// import typeormConfig from './typeorm.config'
import { PORT } from "./constants";
import cors from "cors"
import authRouter from "./routes/authRouter";
import entrieRouter from "./routes/entrieRouter"
import accountRouter from "./routes/accountRouter";

const main = async () => {
  const app = express()
  await createConnection({
  type: "postgres",
  host: "ec2-63-34-97-163.eu-west-1.compute.amazonaws.com",
  port: 5432,
  username: "znahdmhdqadtzk",
  password: "42bb9d7e029940cdd62836c6fda79eaf713ef897b2db6b1b4645752b90223860",
  database: "d1lkvkrs7fpu2i",
  ssl: { rejectUnauthorized: false },
  synchronize: true,
  logging: true,
  entities: ["dist/entities/*.{ts,js}"], 
  url: "postgres://znahdmhdqadtzk:42bb9d7e029940cdd62836c6fda79eaf713ef897b2db6b1b4645752b90223860@ec2-63-34-97-163.eu-west-1.compute.amazonaws.com:5432/d1lkvkrs7fpu2i"

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
