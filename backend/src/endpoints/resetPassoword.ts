import {Request, Response} from "express";
import connection from '../connection'

export default async function resetPassword(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const email = req.body.email as string

        const user = await connection("to_do_list").where({email: email})
        console.log(user)

        res.send()
    } catch (error) {
        res.send({error: error.message})
    }
}