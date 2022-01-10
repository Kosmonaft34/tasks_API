export interface HttpError{
    statusCode: number
    message: string
}

export function httpError(statusCode: number, message: string){
    return{
        statusCode,
        message
    }
}