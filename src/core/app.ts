import {fastify} from "fastify"
import {
    jsonSchemaTransform,
    serializerCompiler,
    validatorCompiler,
    type ZodTypeProvider
} from "fastify-type-provider-zod"
import {fastifyCors} from "@fastify/cors"
import {fastifySwagger} from "@fastify/swagger"
import {fastifySwaggerUi} from "@fastify/swagger-ui"

import {routes} from "./routes"

export const app = fastify({ logger: true }).withTypeProvider<ZodTypeProvider>()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.setErrorHandler((error, _, reply) => {
    app.log.error(error)
    reply.status(500).send({ message: 'Internal server error' })
})

// Enable CORS for development/testing purposes.
// In production, the origin should be restricted for security reasons.
app.register(fastifyCors, {origin: '*'})

app.register(fastifySwagger, {
    openapi: {
        info: {
            title: 'Typed API',
            version: '1.0.0',
        }
    },
    transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUi, {
    routePrefix: '/docs',
})

app.register(routes)
