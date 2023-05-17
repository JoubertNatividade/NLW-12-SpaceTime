import fastity from 'fastify'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const app = fastity()

app.get('/', async () => {
  const user = await prisma.user.findMany()
  return user
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log(`server is running in port:3333`)
  })
