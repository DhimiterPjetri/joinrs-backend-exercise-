export class GetJobOfferPositionDto {
    constructor({ id, position, employer_name }) {
        this.id = id;
        this.position = position;
        this.employer_name = employer_name;
    }

    static fromJobOfferEntity(jobOfferEntity) {
        return new GetJobOfferPositionDto({
            id: jobOfferEntity.id,
            position: jobOfferEntity.position,
            employer_name: jobOfferEntity.employer_name,
        });
    }
}