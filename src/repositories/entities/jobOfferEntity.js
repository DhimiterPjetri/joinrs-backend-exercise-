export class JobOfferEntity {
    constructor({ id, position, employer_name, summary, description, state }) {
        this.id = id;
        this.position = position;
        this.employer_name = employer_name;
        this.summary = summary;
        this.description = description;
        this.state = state;
    }

    static fromJson(json) {
        return new JobOfferEntity({
            id: json.id,
            position: json.position,
            employer_name: json.employer_name,
            summary: json.summary,
            description: json.description,
            state: json.state,
        });
    }
}
