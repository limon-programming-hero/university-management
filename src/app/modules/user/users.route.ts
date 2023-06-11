import express from 'express'
import userController from './users.controller'
const router = express.Router()

router.post('/create-users', userController.createUser)

export default router
