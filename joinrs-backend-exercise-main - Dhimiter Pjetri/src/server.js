import Fastify from 'fastify';
import jobOfferRoutes from './controllers/jobOfferController.js'; 


export async function buildServer() {
    const server = Fastify({logger: true});

    server.get('/', async (request, reply) => {
        return "Hello World";
    });

    server.register(jobOfferRoutes, {prefix: '/job-offers'});
    
    return server;
}
