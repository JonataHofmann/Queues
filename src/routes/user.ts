import { Router } from 'express'
import UserController from '../controller/UserController'
const router = Router()
router.get('/', UserController.all)
router.post('/', UserController.create)
export default router
