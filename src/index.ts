import express, { Response } from "express";
import cors from "cors";
import { PORT } from "./settings";

const app = express();

app.use(cors({ credentials: true }));

app.get("/same-site-strict", (_, response) => {
    response.cookie('same-site', 'strict', {
        expires: new Date(Date.now() + 900_000),
        path: '/',
        httpOnly: true,
        secure: true,
        sameSite: 'strict'
    });

    response.json({ data: 'same-site-strict' });
});

app.get("/same-site-lax", (_, response) => {
    response.cookie('same-site', 'lax', {
        path: '/',
        httpOnly: true,
        secure: true,
        domain: 'localhost',
        sameSite: 'lax'
    });

    response.json({ data: 'same-site-lax' });
});

app.get("/same-site-none", (_, response) => {
    response.cookie('same-site', 'none', {
        path: '/',
        httpOnly: true,
        secure: true,
        domain: 'any',
        sameSite: 'none'
    });

    response.json({ data: 'same-site-none' });
});

app.get('/hc', (_, response) => {
    response.json({ is: 'working'})
})

app.listen(PORT, () => {    
    console.log("tamo rodando na porta 8080")
});