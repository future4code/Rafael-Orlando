import express, { query, Request, Response } from "express";
import cors from "cors";
import {countries, country} from "./countries";

const app = express()

app.use(express.json())
app.use(cors())


app.get("/countries/:id" , (req: Request, res: Response)=> {
    const id = Number(req.params.id);
    res
    .status(200)
    .send(countries.find((country=> country.id === id)))
});


app.get("/countries/all", (req: Request, res: Response)=> {
        res
        .status(200)
        .send(countries)
    
})


app.get("/countries/search", (req: Request, res: Response)=> {
    let result : country[] = countries.filter(
        country => country.name.includes(req.query.name as string)
    )
    if (result.length) {
        res.status(200).send(result)
    }else{
        res.status(400).send({message: "Não foi possivel localizar, conforme os paramentros informados"})
    }
        
})

app.put("/countries/edit/:id", (req: Request, res: Response)=> {
    res
    .status(200)
    .send(countries)

})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
})
