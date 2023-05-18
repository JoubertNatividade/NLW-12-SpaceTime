import fastity from 'fastify'
import { memoriesRoutes } from './routes/memories'
import cors from '@fastify/cors'
const app = fastity()

app.register(memoriesRoutes)
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
