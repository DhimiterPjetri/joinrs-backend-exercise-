import tap from 'tap';

// Testing jobOfferRepository
tap.test('jobOffer', async (t) => {
    const jobOfferRepository = await t.mockImport('../repositories/jobOfferRepository.js', {
        'fs/promises': {
            readFile: async () => {
                return JSON.stringify([
                    {id: 56023, position: 'Recepcionista Bilingue', employer_name: 'Junior', summary: 'Test2', description: 'Test', state: 'published'}
                ]);
            }
        }
    });
    // Testing getJobOffer method
    const response = await jobOfferRepository.default.getJobOffer(56023);
    t.equal(response.id, 56023);
    t.equal(response.position, 'Recepcionista Bilingue');
});

// Testing searchJobOffers method
tap.test('searchJobOffers', async (t) => {
    const jobOfferRepository = await t.mockImport('../repositories/jobOfferRepository.js', {
        'fs/promises': {
            readFile: async () => {
                return JSON.stringify([
                    {id: 56023, position: 'Recepcionista Bilingue', employer_name: 'Junior', summary: 'Test2', description: 'Test', state: 'published'},
                    {id: 56024, position: 'Developer', employer_name: 'Senior', summary: 'Test3', description: 'Test', state: 'published'}
                ]);
            }
        }
    });
    // Testing searchJobOffers method
    const response = await jobOfferRepository.default.searchJobOffers('Recepcionista Bilingue');
    t.equal(response.length, 1);
    t.equal(response[0].id, 56023);
});

// Testing updateJobOfferState method
tap.test('updateJobOfferState', async (t) => {
    const jobOfferRepository = await t.mockImport('../repositories/jobOfferRepository.js', {
        'fs/promises': {
            readFile: async () => {
                return JSON.stringify([
                    {id: 56023, position: 'Recepcionista Bilingue', employer_name: 'Junior', summary: 'Test2', description: 'Test', state: 'published'}
                ]);
            }
        }
    });
    // Testing updateJobOfferState method
    const response = await jobOfferRepository.default.updateJobOfferState(56023, 'expired');
    t.equal(response, true);
});
