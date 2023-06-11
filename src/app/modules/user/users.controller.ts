import { Request, Response } from 'express'
import userService from './users.service'

const createUser = async (req: Request, res: Response) => {
  const user = await req.body
  const result = await userService.createUser(user)
  if (!result) {
    res.status(400).send({
      success: false,
      message: 'User failed to be created!',
    })
  }
  res.status(200).send({
    success: true,
    message: 'User Created Successfully!',
    data: result,
  })
}
export default {
  createUser,
}
