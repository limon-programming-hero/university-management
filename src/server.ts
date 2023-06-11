import mongoose from 'mongoose'
import dotenv from './config/index'
import app from './app'

async function bootstrap(): Promise<void> {
  try {
    await mongoose.connect(dotenv.database_url as string)
    // app.use('/app/v1/user')
    app.listen(dotenv.port, () => {
      console.log(`Application listening on port ${dotenv.port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

bootstrap()
