import mongoose from 'mongoose'
import dotenv from './config/index'
import app from './app'

async function boostrap(): Promise<void> {
  try {
    await mongoose.connect(dotenv.database_url as string)
    app.listen(dotenv.port, () => {
      console.log(`Application listening on port ${dotenv.port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

boostrap()
