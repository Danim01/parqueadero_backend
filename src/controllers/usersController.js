import { connection } from "../database/connection.js"

async function createUser(req, res){
    try {
        const {nombre, identificacion, celular, email} = req.body
        const [result] = await connection.query(
            `insert into usuarios (nombre, identificacion, celular, email)
            values (?, ?, ?, ?)`,
            [nombre, identificacion, celular, email]
        )

        const newUserId = result.insertId

        return res.status(201).json({
            mensaje: "Usuario creado correctamente",
            id: newUserId
        })
    } catch (error) {
        return res.status(500).json({
            mensaje: error.message
        })
    }
}

async function getAllUsers(req, res){
    try {
        const users = await connection.query(
            `select * from usuarios`
        )

        return res.status(200).json({
            usuarios: users[0]
        })
    } catch (error) {
        return res.status(500).json({
            mensaje: error.message
        })
    }
}

async function getUser(req, res){
    try {
        const {id} = req.params
        const user = await connection.query(
            `select * from usuarios where id = ?`, [id]
        )
        
        return res.status(200).json({
            usuario: user[0][0]
        })
    } catch (error) {
        return res.status(500).json({
            mensaje: error.message
        })
    }
}

export {
    createUser,
    getAllUsers,
    getUser
}