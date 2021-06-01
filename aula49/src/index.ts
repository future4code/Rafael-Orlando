import express, { Express , Request, Response } from 'express'
import knex from 'knex'
import cors from 'cors'
import {AddressInfo} from 'net'
import {connection} from "./connection";


//dotenv.config()

export const app: Express = express();

app.use(express.json());
app.use(cors());


app.get("/labenu", async (req: Request , res: Response )=>{
    try {
        const result = await connection.raw(`
            SELECT name, type, email FROM aula48_exercicio
        `)
        res.status(200).send(result[0])
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Não deu certo")
    }
})

//a)
app.get("/labenu/search", async (req: Request , res: Response )=>{
    try {
        const name = req.query.name as string
        console.log(name)

        const result = await connection.raw(`
            SELECT name, type, email FROM aula48_exercicio WHERE name LIKE "${name}%"
        `)
        res.status(200).send(result[0])
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Não deu certo")
    }
})

//b)
app.get("/labenu/search/", async (req: Request , res: Response )=>{
    try {
        const type = req.query.type as string
        console.log(type)

        const result = await connection.raw(`
            SELECT name, type, email FROM aula48_exercicio WHERE name LIKE "${type}%" 
        `)
        res.status(200).send(result[0])
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Não deu certo")
    }
    
})


//Exercicio 2

app.get("/labenu/search", async (req: Request , res: Response )=>{
    try {
        const name = req.query.name as string
        const orderBy = req.query.orderBy as string
        const orderType = req.query.orderType as string
        console.log(orderBy)
        console.log(orderType)

        const result = await connection.raw(`
            SELECT name, type, email FROM aula48_exercicio WHERE name LIKE "${name}%" ORDER BY ${orderBy} ${orderType}
        `)
        res.status(200).send(result[0])
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Não deu certo")
    }
})


//Exercicio 3


app.get("/labenu/search", async (req: Request , res: Response )=>{
    try {
        const type = req.query.type as string
        const orderBy = req.query.orderBy as string
        const orderType = req.query.orderType as string
        console.log(type)
        console.log(orderBy)
        console.log(orderType)

        const result = await connection.raw(`
            SELECT name, type, email FROM aula48_exercicio WHERE name LIKE "${type}%" ORDER BY ${orderBy} ${orderType} LIMIT 5 OFFSET 5
        `)
        res.status(200).send(result[0])
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Não deu certo")
    }
})


//Exercicio 4


app.get("/labenu/search", async (req: Request , res: Response )=>{
    try {
        const name = req.query.name as string
        const type = req.query.type as string
        const orderBy = req.query.orderBy as string
        const orderType = req.query.orderType as string
        console.log(name)
        console.log(type)
        console.log(orderBy)
        console.log(orderType)

        const result = await connection.raw(`
            SELECT name, type, email FROM aula48_exercicio WHERE name LIKE "${name}%" AND "${type}%" ORDER BY ${orderBy} ${orderType} LIMIT 5 OFFSET 5
        `)
        res.status(200).send(result[0])
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Não deu certo")
    }
})



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});










