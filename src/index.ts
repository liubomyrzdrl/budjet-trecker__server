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
  host: "ec2-52-86-2-228.compute-1.amazonaws.com",
  port: 5432,
  username: "cggpbentastmeh",
  password: "ffed1767d46f64fd9f7b0371bed296c1079ffb17cc523065a47f66be0d7888b5",
  database: "d9mpkuvh5oa1b9",
  ssl: { rejectUnauthorized: false },
  synchronize: true,
  logging: true,
  entities: ["dist/entities/*.{ts,js}"], 
  url: "postgres://cggpbentastmeh:ffed1767d46f64fd9f7b0371bed296c1079ffb17cc523065a47f66be0d7888b5@ec2-52-86-2-228.compute-1.amazonaws.com:5432/d9mpkuvh5oa1b9"

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
