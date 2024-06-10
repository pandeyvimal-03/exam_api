import { user_modal } from "./modal";

export async function register_controller(body){
    const {FIRST_NAME , LAST_NAME , EMAIL , MOBILE , STREAM , SPECIALIZATION , UNIVERSITY , COLLEGE , LOCATION} = body;

    try{

        const is_user = await user_modal.findOne({MOBILE : MOBILE})
        if(is_user){
            return Promise.reject("user already exists with provide number")
        }
           const user = new user_modal({
            FIRST_NAME : FIRST_NAME,
            LAST_NAME : LAST_NAME , 
            EMAIL : EMAIL,
            MOBILE : MOBILE,
            STREAM : STREAM,
            SPECIALIZATION : SPECIALIZATION,
            UNIVERSITY : UNIVERSITY,
            COLLEGE : COLLEGE,
            LOCATION : LOCATION
           })
        await user.save()

       
           
    }
    catch(err){
       return Promise.reject(err)
    }
}