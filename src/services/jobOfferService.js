import jobOfferRepository from '../repositories/jobOfferRepository.js';

export default {
    // Method for getting a specific job offer by ID
    async getJobOffer(id) {
        return jobOfferRepository.getJobOffer(id);
    },

    // Method for getting job offers based on a search query
    async searchJobOffers(query) {
        return jobOfferRepository.searchJobOffers(query);
    },

    // Method for updating the state of a specific job offer
    async updateJobOfferState(id, state) {
        return jobOfferRepository.updateJobOfferState(id, state);
    }
}
