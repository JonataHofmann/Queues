import { Request, Response, Router } from 'express'
const router = Router()

router.get('/', (request: Request, response: Response) => {
  console.log('Sistema funcionando!')
  return response.status(200).send('Sistema funcionando!')
})

export default router
