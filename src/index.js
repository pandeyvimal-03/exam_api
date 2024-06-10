import config from '../config';
import express from 'express'
import { initDB } from './connection/connection';
import { global_routes } from './global_routes/global_routes';
const app = express();

initDB()
app.use(express.json())
app.use(express.urlencoded({extended : true}))

global_routes(app)


app.get('/', (req ,res)=>{
    res.send(`Backend is running on ${config.port}`)
})


app.listen(config.port , ()=>{
    console.log(`App is running on port ${config.port}`)
})