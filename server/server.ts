import express, { Request, Response } from "express"

const app = express()
const port = 3000 // oder ein anderer Port Ihrer Wahl

app.get("/", (req: Request, res: Response) => {
    res.send("Hallo Welt mit TypeScript!")
})

app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`)
})
