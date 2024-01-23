import {Router , Request, Response} from 'express'

const routes : Router = Router()

export default routes.get('/', (req : Request, res : Response) => {
  return res.json({
    message : "Hello dev"
  })
})
.get("/amor", (req, res) => {
  return res.status(200).json({
    message : "ooutra rota mano"
  })
})
//posso fazer essa forma de cascata em vez de ficar chamando o routes toda vez

