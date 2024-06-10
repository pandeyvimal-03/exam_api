import mongoose from "mongoose";
import collection from "../../collection/collection";
 
const {Schema} = mongoose;

const user_schema = new Schema({
     FIRST_NAME : {
        type : String,
        required : true
     },
     LAST_NAME : {
        type : String
     },
     EMAIL : {
        type : String,
        required : true
     },
     MOBILE : {
        type : String,
        required : true
     },
     STREAM : {
        type : String,
        required : true
     },
     SPECIALIZATION : {
        type : String,
        required : true
     },
     UNIVERSITY : {
        type : String,
        required : true
     },
     COLLEGE : {
        type : String,
        required : true
     },
     LOCATION : {
        type : String,
        required : true
     }

})

export const user_modal = mongoose.model(collection.user , user_schema)