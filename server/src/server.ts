import 'dotenv/config'

import fastity from 'fastify'
import jwt from '@fastify/jwt'
import cors from '@fastify/cors'

import { memoriesRoutes } from './routes/memories'
import { AuthRoutes } from './routes/auth'

const app = fastity()

app.register(memoriesRoutes)
app.register(jwt, {
  secret: 'ma1hme34mka2lk',
})
app.register(AuthRoutes)
app.register(cors, {
  origin: true,
})
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log(`server is running in port:3333`)
  })
