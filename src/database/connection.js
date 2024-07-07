import dotenv from "dotenv"
import mysql from "mysql2"

dotenv.config()

export const connection = mysql.createPool({
    host: process.env.DBHOST,
    database: process.env.DBNAME,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD
}).promise()

