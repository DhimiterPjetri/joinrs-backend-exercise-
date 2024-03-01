import {buildServer} from "./src/server.js";

const fastify = await buildServer();
await fastify.listen({
    port: 8080,
    host: '0.0.0.0'
});

