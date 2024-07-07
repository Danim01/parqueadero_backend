import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import brandsRouter from "./router/brandsRoutes.js"
import colorsRouter from "./router/colorsRoutes.js"
import usersRouter from "./router/usersRoutes.js"
import vehiclesRouter from "./router/vehiclesRoutes.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

const corsOptions = {
    origin: ["http://localhost:5173", "https://d09mbv8k-5173.use2.devtunnels.ms/"],
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(express.json())

app.use("/api/brands", brandsRouter)
app.use("/api/colors", colorsRouter)
app.use("/api/users", usersRouter)
app.use("/api/vehicles", vehiclesRouter)


app.listen(port, () => {
    console.log(`server running on port ${port}`)
})