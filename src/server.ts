import { fastifyCors } from '@fastify/cors'
import fastify from 'fastify'
import { serializerCompiler, validatorCompiler, type ZodTypeProvider } from 'fastify-type-provider-zod'
import { env } from '../envs.ts'
import { getRoomsRoute } from './http/routes/get-rooms.ts'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
  origin: env.BASE_URL_WEB,
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(getRoomsRoute)

app.listen({ port: env.PORT }).then(() => {
  console.warn('Server running!')
})
