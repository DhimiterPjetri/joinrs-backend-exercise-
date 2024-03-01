import tap from 'tap';
import {JobOfferEntity} from "../repositories/entities/jobOfferEntity.js";
import Fastify from "fastify";
import jobOfferService from '../services/jobOfferService.js';

tap.test('jobOffer', async (t) => {
    const fastifyBuilder = await t.mockImport('../controllers/jobOfferController.js', {
        '../services/jobOfferService.js': t.createMock(jobOfferService, {
            getJobOffer: (id) => id === '56023' ? new JobOfferEntity({id: 56023, position: 'Recepcionista Bilingue', employer_name: 'Junior', summary: 'Test2', description: 'Test', state: 'published'}) : null,
            searchJobOffers: () => [new JobOfferEntity({id: 56023, position: 'Recepcionista Bilingue', employer_name: 'Junior', summary: 'Test2', description: 'Test', state: 'published'})],
            updateJobOfferState: (id, state) => id === '56023' && ['published', 'expired'].includes(state)
        })
    });
    const fastify = Fastify();
    await fastifyBuilder.default(fastify);

    // Test GET /:id
    let response = await fastify.inject({
        method: 'GET',
        url: '/56023'
    });
    t.equal(response.statusCode, 200);
    t.equal(response.json().id, 56023);

    // Test GET /:id with non-existent job offer
    response = await fastify.inject({
        method: 'GET',
        url: '/56024' 
    });
    t.equal(response.statusCode, 404);

    // Test GET /
    response = await fastify.inject({
        method: 'GET',
        url: '/?q=Recepcionista Bilingue'
    });
    t.equal(response.statusCode, 200);
    t.equal(response.json().length, 1);
    t.equal(response.json()[0].id, 56023);

    // Test GET / without query
    response = await fastify.inject({
        method: 'GET',
        url: '/'
    });
    t.equal(response.statusCode, 200);
    t.equal(response.json().length, 1);
    t.equal(response.json()[0].id, 56023);

    // Test PUT /:id/state
    response = await fastify.inject({
        method: 'PUT',
        url: '/56023/state',
        payload: {
            state: 'expired'
        }
    });
    t.equal(response.statusCode, 201);

    // Test PUT /:id/state with invalid state
    response = await fastify.inject({
        method: 'PUT',
        url: '/56023/state',
        payload: {
            state: 'invalid'
        }
    });
    t.equal(response.statusCode, 400);

    // Test PUT /:id/state with non-existent job offer
    response = await fastify.inject({
        method: 'PUT',
        url: '/56024/state', 
        payload: {
            state: 'published'
        }
    });
    t.equal(response.statusCode, 404);
});

