import config from '../../../config'
import { IUser } from './users.interface'
import { User } from './users.model'
import { generatedUserId } from './users.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // incremental id
  const id = await generatedUserId()
  user.id = id
  // default password
  if (!user.password) {
    user.password = config.user_default_password as string
  }
  const createdUser = await User.create(user)
  console.log(createdUser)
  if (!createUser) {
    throw new Error('Failed to create user!')
  }
  return createdUser
}

export default {
  createUser,
}
