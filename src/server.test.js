import tap from 'tap';
import {buildServer} from "../src/server.js";

tap.test('jobOffer', async (t) => {
    const fastify = await buildServer();

    t.teardown(() => fastify.close());

    await fastify.ready();

    const response = await fastify.inject({
        method: 'GET',
        url: '/job-offers/56023'
    });

    t.equal(response.statusCode, 200);
    if (response.json().id !== 56023) {
        t.fail('Expected job offer with id 56023');
    }
});
