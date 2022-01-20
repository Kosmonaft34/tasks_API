import { RequestHandler } from "express";
import { HttpError } from "./http -error";

export default function decoratedMethod(method: RequestHandler) {
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
  middleware(req, res, next) {

  }
}

export function controller<T extends IController>(controllerObj: T): T {
  const decoratedController: IController = {}
  // извлекаем названия свойств из контролдлера: getAllTasks, getTask и т.д. и возвращает нам массив
  //map(method => controllerObj[method])- method-это название метода string , далее берём наш контроллер и извлекаем из него свойство по его названию и у нас получается массив из 5 элементов(методов) их перебираем  создаём новое свойство на каждой итерации
  Object.getOwnPropertyNames(controllerObj).map(method => controllerObj[method]).forEach(method => {
    // создаём новое свойство на каждой итерации и записываем туда наш decoratedMethod(method)
    decoratedController[method.name] = decoratedMethod(method)
  })
  //возвращаем задекорированный контроллер и приводим его к типу T оператором `as`
  return decoratedController as T
}
