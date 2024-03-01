import jobOfferService from '../services/jobOfferService.js';
import { GetJobOfferSummaryDto } from './dtos/jobOfferSummaryDto.js';
import { GetJobOfferPositionDto } from './dtos/jobOfferPositionDto.js';

export default async function routes(fastify, options) {
    // Route for getting a specific job offer by ID
    fastify.get('/:id', async (request, reply) => {
        const jobOffer = await jobOfferService.getJobOffer(request.params.id);
        if (!jobOffer || jobOffer.state === 'expired') {
            reply.code(404).send();
            return;
        }
        return new GetJobOfferSummaryDto(jobOffer);
    });

    // Route for getting job offers based on a search query
    fastify.get('/', async (request, reply) => {
        const jobOffers = await jobOfferService.searchJobOffers(request.query.q);
        
        if(request.query.q)
        {
            return jobOffers.map(jobOffer => new GetJobOfferPositionDto(jobOffer));
        } else {
            return jobOffers.map(jobOffer => new GetJobOfferSummaryDto(jobOffer));
        }
            
    });
    
    // Route for updating the state of a specific job offer
    fastify.put('/:id/state', async (request, reply) => {
        const { state } = request.body;
        if (!['published', 'expired'].includes(state)) {
            reply.code(400).send();
            return;
        }
        const updated = await jobOfferService.updateJobOfferState(request.params.id, state);
        if (!updated) {
            reply.code(404).send();
            return;
        }
        reply.code(201).send();
    });
}

