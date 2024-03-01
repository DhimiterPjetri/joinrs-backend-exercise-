import {readFile} from 'fs/promises';
import { JobOfferEntity } from './entities/jobOfferEntity.js';

export default {
    // Method for getting a specific job offer by ID
    async getJobOffer(id) {
        const buffer = await readFile(new URL('./files/job_offers.json', import.meta.url));
        const jobOffersData = JSON.parse(buffer.toString());
        const jobOffers = jobOffersData.map(JobOfferEntity.fromJson);
        return jobOffers.find(jobOffer => jobOffer.id === Number(id));
    },

    // Method for getting job offers based on a search query
    async searchJobOffers(query) {
        const buffer = await readFile(new URL('./files/job_offers.json', import.meta.url));
        const jobOffersData = JSON.parse(buffer.toString());
        const jobOffers = jobOffersData.map(JobOfferEntity.fromJson);
        if (query) {
            return jobOffers.filter(jobOffer => jobOffer.position.toLowerCase().includes(query.toLowerCase()) && jobOffer.state === 'published');
        } else {
            return jobOffers.filter(jobOffer => jobOffer.state === 'published');
        }
    },
    
    // Method for updating the state of a specific job offer
    async updateJobOfferState(id, state) {
        const buffer = await readFile(new URL('./files/job_offers.json', import.meta.url));
        const jobOffersData = JSON.parse(buffer.toString());
        const jobOffers = jobOffersData.map(JobOfferEntity.fromJson);
        const jobOffer = jobOffers.find(jobOffer => jobOffer.id === Number(id));
        if (!jobOffer) {
            return false;
        }
        jobOffer.state = state;
        return true;
    }
};
