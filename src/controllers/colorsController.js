import { connection } from "../database/connection.js";

async function getAllColors(req, res){
    try {
        const colors = await connection.query(
            `select * from colores`
        )
        return res.status(200).json({
            colores: colors[0]
        })
    } catch (error) {
        return res.status(500).json({
            mensaje: error.message
        })
    }
}

export {
    getAllColors
}