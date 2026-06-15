//import fastify = require("fastify");
import fastify from 'fastify'

const app = fastify()

app.get('/', async (request, response) => {
    return {hello: 'world'}
})

app.listen({
    port:3333
}).then(() => {
    console.log( `HTTP Server Running on http://localhost:3333`)
})