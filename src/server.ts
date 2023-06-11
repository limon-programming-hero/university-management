import mongoose from 'mongoose'
import config from './config/index'
import app from './app'

async function bootstrap(): Promise<void> {
  try {
    const options = {
      retryWrites: true,
    }
    await mongoose.connect(config.database_url as string, options)
    console.log('🏪 database connected successfully')

    app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

bootstrap()
