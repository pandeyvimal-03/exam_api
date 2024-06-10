import dotenv from "./dotenv";

export default {
    port : dotenv.port,
    db : dotenv.db,
    secret_key : dotenv.secret_key,
    db_url : `mongodb://127.0.0.1/${db}`
}