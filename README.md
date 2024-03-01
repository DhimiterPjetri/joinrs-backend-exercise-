# Joinrs Backend Challenge Exercise - Solution

This document outlines the solution to the Joinrs Backend Challenge Exercise. The solution involves implementing a simple REST API using Node.js and Fastify.

## Solution Overview

The solution involves implementing the following endpoints:

- An endpoint to return a job offer given an id.
- An endpoint to search for job offers given a search query.
- An endpoint to update the state of a job offer.

## Architectural Decisions

### Data Transfer Objects (DTOs)

Data Transfer Objects (DTOs) were used to ensure that the data sent over the network is valid, reliable, and easy to understand. Two DTOs were created: GetJobOfferPositionDto and GetJobOfferSummaryDto. These DTOs are responsible for shaping the data into a format that is suitable for the client.

### Services and Repositories

The application logic was separated into services and repositories. This separation of concerns makes the code more maintainable and testable.

- The jobOfferService is responsible for the business logic of the application. It interacts with the jobOfferRepository to fetch and manipulate data.
- The jobOfferRepository is responsible for data access. It reads the job offers from a JSON file and provides methods to get a job offer by id, search job offers, and update the state of a job offer.

### Testing

Unit tests were written for the DTOs, controllers, services and repositories. These tests ensure that each part of the application works as expected in isolation. Integration tests were also written to test the endpoints and ensure that they work correctly when all parts of the application are integrated.

### Optimizations

The current implementation reads the job offers from a JSON file. This approach is simple and works well for a small number of job offers. However, it is not scalable for a large number of job offers. If the application needs to handle a large number of job offers, a database should be used instead of a JSON file.

### Future Improvements

If more time was available, the following improvements could be made:

- Implement pagination for the search endpoint. This would allow the client to fetch a specific number of job offers at a time, which would be useful if there are a large number of job offers.
- Add error handling middleware to handle exceptions and errors in a centralized place.
- Add input validation to ensure that the data sent to the endpoints is valid.
- Use a database to store the job offers. This would make the application more scalable and allow for more complex queries.

### Run Tests

- Run `npm test` to run the tests



