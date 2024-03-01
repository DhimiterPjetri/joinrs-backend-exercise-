import tap from 'tap';
import jobOfferRepository from '../repositories/jobOfferRepository.js';
import {JobOfferEntity} from "../repositories/entities/jobOfferEntity.js";

tap.test('jobOffer', async (t) => {
    const jobOfferService = await t.mockImport('../services/jobOfferService.js', {
        '../repositories/jobOfferRepository.js': t.createMock(jobOfferRepository, {
            getJobOffer: () => new JobOfferEntity({id: 56023, position: 'Recepcionista Bilingue', employer_name: 'Junior', summary: 'Test2', description: 'Test', state: 'published'}),
            searchJobOffers: () => [new JobOfferEntity({id: 56023, position: 'Recepcionista Bilingue', employer_name: 'Junior', summary: 'Test2', description: 'Test', state: 'published'})],
            updateJobOfferState: () => true
        })
    });

    // Test getJobOffer
    const response = await jobOfferService.default.getJobOffer(56023);
    t.equal(response.id, 56023);
    t.equal(response.position, 'Recepcionista Bilingue');

    // Test searchJobOffers
    const searchResponse = await jobOfferService.default.searchJobOffers('Recepcionista Bilingue');
    t.same(searchResponse[0], response);

    // Test updateJobOfferState
    const updateResponse = await jobOfferService.default.updateJobOfferState(56023, 'published');
    t.ok(updateResponse);
});
