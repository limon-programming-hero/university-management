import express, { Application, Request, Response } from 'express'
const app: Application = express()
import cors from 'cors'
import usersRouter from './app/modules/user/users.route'

// middleware
app.use(cors())
app.use(express.json())

// Application Routes
app.use('/api/v1/users', usersRouter)

// Testing route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
