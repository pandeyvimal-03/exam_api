import dotenv from 'dotenv'
dotenv.config()

export default {
    port : process.env.PORT,
    db : process.env.DB,
    secret_key :process.env.SECRET_KEY
}