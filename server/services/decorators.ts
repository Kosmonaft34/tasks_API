import { RequestHandler } from "express";
import { HttpError } from "./http -error";

export default function decoratedController(method: RequestHandler) {
  const decoratedMethod: RequestHandler = async function (req, res, next) {
    try {
      await method(req, res, next)
    } catch (error) {
      const err = error as HttpError
      res.status(err.statusCode).send(err.message)
    }
  }
  return decoratedMethod
}

export interface IController {
  [method: string]: RequestHandler
}

const someObj: IController = {
  middleware(req, res, next){
    
  }
}

export function controller(methods: any) {

}
