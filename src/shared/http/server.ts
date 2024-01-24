import 'express-async-errors'
import 'reflect-metadata'
import express, {Request, Response, NextFunction} from 'express'
import cors from 'cors'
import routes from './routes/'
import AppError from '../errors/AppError'
import {dataSource} from "../../shared/typeorm/data-source"
const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.use((
  error : Error,
  req : Request,
  res :Response,
  next :NextFunction
  ) : Response => {

  if(error instanceof AppError){//se for instancia, vai possuir uma prop
    return res.status(error.statusCode).json({
      message : error.message,
      status : error.statusCode
    })
  }
  console.error(error)
  return res.status(500).json({
    message : "internal Server Error",
    status : 500
  })
})

app.listen(3333, async () =>{
  try{
    await dataSource.initialize()
    console.log("connected at database")
  } catch (e) {
    console.error(e)
    console.log('caiu no erro')
  }
  console.log(`server is running on port ${3333}`)
})
