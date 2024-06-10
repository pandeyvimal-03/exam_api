import user_router from "../v1/user/routes";

export function global_routes(app){
    app.use('/v1' , user_router)
}