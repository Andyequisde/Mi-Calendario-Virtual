import express, { json } from 'express'
import morgan from 'morgan'
import 'dotenv/config'
import notaRoutes from './routes/nota.routes'
import database from './database'
const app = express()
const port = process.env.PORT
app.use(json())
app.use(morgan('dev'))
app.use(notaRoutes)

app.listen(port, () => {
    console.log(`Escuchando pedidos en PORT: ${port}`)
})