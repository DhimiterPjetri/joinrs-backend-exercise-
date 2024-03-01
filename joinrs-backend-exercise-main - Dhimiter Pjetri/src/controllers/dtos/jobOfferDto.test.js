import tap from 'tap';
import { GetJobOfferPositionDto } from './jobOfferPositionDto.js';
import { GetJobOfferSummaryDto } from './jobOfferSummaryDto.js';
import { JobOfferEntity } from "../../repositories/entities/jobOfferEntity.js";

// Testing GetJobOfferPositionDto
tap.test('GetJobOfferPositionDto', (t) => {
    const jobOfferEntity = new JobOfferEntity({id: 56023, position: 'Recepcionista Bilingue', employer_name: 'Junior', summary: 'Test2', description: 'Test', state: 'published'});
    const dto = GetJobOfferPositionDto.fromJobOfferEntity(jobOfferEntity);

    t.equal(dto.id, jobOfferEntity.id);
    t.equal(dto.position, jobOfferEntity.position);
    t.equal(dto.employer_name, jobOfferEntity.employer_name);
    t.end(); 
});

// Testing GetJobOfferSummaryDto
tap.test('GetJobOfferSummaryDto', (t) => {
    const jobOfferEntity = new JobOfferEntity({id: 56023, position: 'Recepcionista Bilingue', employer_name: 'Junior', summary: 'Test2', description: 'Test', state: 'published'});
    const dto = GetJobOfferSummaryDto.fromJobOfferEntity(jobOfferEntity);

    t.equal(dto.id, jobOfferEntity.id);
    t.equal(dto.position, jobOfferEntity.position);
    t.equal(dto.employer_name, jobOfferEntity.employer_name);
    t.equal(dto.summary, jobOfferEntity.summary);
    t.equal(dto.description, jobOfferEntity.description);
    t.end(); 
});
