export function success_service(response){
    return {
        status :true,
        error : null,
        respone_code : 200,
        result : response
    }
}

export function fail_service(error){
    return {
        staus : false,
        error: error,
        response_code : 500,
        result : null
    }
}