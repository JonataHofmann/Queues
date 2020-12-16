import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import routes from './routes'
mongoose
  .connect(process.env.MONGO_URL || '', {
    useNewUrlParser: true,
  })
  .then((result) => {
    console.log('[Server] MongoDB Connected')

    const app: express.Application = express()
    app.use(express.json())
    app.use(routes)

    app.listen(process.env.APPLICATION_PORT || 3333, () =>
      console.log(
        `[Server] Aplicativo rodando na porta ${
          process.env.APPLICATION_PORT || 3333
        }!`
      )
    )
  })
  .catch((error) => {
    console.log('[Server] Error:', error)
  })
