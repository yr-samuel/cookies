import express, { Response } from "express";
import cors from "cors";
import { PORT } from "./settings";

const app = express();

app.use(cors({ credentials: true }));

app.get("/index", (_, response: Response) => {
    response.cookie('cookie', 'cookie', {
        expires: new Date(Date.now() + 900_000),
        // domain: 'localhost',
        path: '/',
        httpOnly: true,
        secure: true,
        sameSite: 'strict'
    });

    response.json({ data: 1});
});

app.get('/hc', (_, response) => {
    response.json({ is: 'working'})
})

app.listen(PORT, () => {    
    console.log("tamo rodando na porta 8080")
});