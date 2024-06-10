import mongoose from "mongoose";
import config from "../../config";

export function initDB(){
    mongoose.connect(config.db_url , ({
        useNewUrlParser : true,
        useNewUnifiedTopology : true
    }))
    .then((res)=>{
        console.log("Database connected successfully!")
    })
    .catch((error)=>{
        console.log("Database failed to connect! : " ,error)
    })
    .finally(()=>{
        console.log("connection attempt successfull")
    })
}


