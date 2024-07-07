import { connection } from "../database/connection.js";

async function getAllBrands(req, res){
    try {
        const brands = await connection.query(
            `select * from marcas`
        )
        return res.status(200).json({
            marcas: brands[0]
        })
    } catch (error) {
        return res.status(500).json({
            mensaje: error.message
        })
    }
}

export {
    getAllBrands
}