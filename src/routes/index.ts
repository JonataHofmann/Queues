import { Router } from 'express'
import init from './init'
import user from './user'

const routes = Router()

routes.use('/init', init)
routes.use('/user', user)
export default routes
