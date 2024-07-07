import { connection } from "../database/connection.js"

async function createVehicle(req, res){
    try {
        const {
            placa,
            tipoVehiculo,
            marcaId,
            colorId,
            modelo,
            tipoServicio,
            horaEntrada,
            horaSalida,
            usuarioId
        } = req.body
        const [result] = await connection.query(
            `insert into vehiculos (placa, tipo_vehiculo, marca_id, color_id, modelo, tipo_servicio, hora_entrada, hora_salida, usuario_id)
            values (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [placa, tipoVehiculo, marcaId, colorId, modelo, tipoServicio, horaEntrada, horaSalida || null, usuarioId]
        )

        const newVehicleId = result.insertId

        return res.status(201).json({
            mensaje: "Vehiculo creado correctamente",
            id: newVehicleId
        })

    } catch (error) {
        return res.status(500).json({
            mensaje: error.message
        })
    }
}

async function getAllVehicles(req, res){
    try {
        const vehicles = await connection.query(
            `select v.*, m.nombre as marca_nombre, c.nombre as color_nombre
            from vehiculos v
            join marcas m on v.marca_id = m.id
            join colores c on v.color_id = c.id`
        )

        return res.status(200).json({
            vehiculos: vehicles[0]
        })
    } catch (error) {
        return res.status(500).json({
            mensaje: error.message
        })
    }
}

async function getVehicle(req, res){
    try {
        const {id} = req.params
        const vehicle = await connection.query(
            `SELECT v.*, m.nombre AS marca_nombre, c.nombre AS color_nombre
            FROM vehiculos v
            JOIN marcas m ON v.marca_id = m.id
            JOIN colores c ON v.color_id = c.id
            WHERE v.id = ?`, [id]
        )

        return res.status(200).json({
            vehiculo: vehicle[0][0]
        })
    } catch (error) {
        return res.status(500).json({
            mensaje: error.message
        })
    }
}

export {
    createVehicle,
    getAllVehicles,
    getVehicle
}