export class GetJobOfferSummaryDto {
    constructor({ id, position, employer_name, summary, description }) {
        this.id = id;
        this.position = position;
        this.employer_name = employer_name;
        this.summary = summary;
        this.description = description;
    }

    static fromJobOfferEntity(jobOfferEntity) {
        return new GetJobOfferSummaryDto({
            id: jobOfferEntity.id,
            position: jobOfferEntity.position,
            employer_name: jobOfferEntity.employer_name,
            summary: jobOfferEntity.summary,
            description: jobOfferEntity.description,
        });
    }
}