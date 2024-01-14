import "dotenv/config"
import express, { Request, Response } from "express"
import { createConnection } from "typeorm"

const app = express()
const port = 3000 // oder ein anderer Port Ihrer Wahl

app.get("/", (req: Request, res: Response) => {
    res.send("Hallo Welt mit TypeScript!")
})

app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`)
})

createConnection({
    type: "postgres",
    host: process.env.DATABASE_HOST,
    port: 5432,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: true,
    logging: false,
    entities: ["dist/entity/**/*.js"],
    migrations: ["dist/migration/**/*.js"],
    subscribers: ["dist/subscriber/**/*.js"],
})
    .then(async (connection) => {
        console.log("Verbindung zur Datenbank hergestellt.")
        // Ihre Logik hier
    })
    .catch((error) => console.log(error))
