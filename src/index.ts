import express from "express";
import bodyParser from "body-parser";
import { createConnection } from "typeorm"
import { PORT } from "./constants";
import cors from "cors"
import authRouter from "./routes/authRouter";
import entrieRouter from "./routes/entrieRouter"
import accountRouter from "./routes/accountRouter";

const main = async () => {
  const app = express()
  await createConnection({
  type: "postgres",
  host: "ec2-52-209-171-51.eu-west-1.compute.amazonaws.com",
  port: 5432,
  username: "getmxiobnrejka",
  password: "2eeff9562e26eaaf299dae756f0d973ac57eeec6595b553d6aead25354a113af",
  database: "d20pf48roblj9t",
  ssl: { rejectUnauthorized: false },
  synchronize: true,
  logging: true,
  entities: ["dist/entities/*.{ts,js}"], 
  url: "postgres://getmxiobnrejka:2eeff9562e26eaaf299dae756f0d973ac57eeec6595b553d6aead25354a113af@ec2-52-209-171-51.eu-west-1.compute.amazonaws.com:5432/d20pf48roblj9t"

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
