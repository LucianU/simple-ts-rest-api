# Virta API
An assignment for a job interview.


# Setup
## Install

```bash
$ npm install
```

## Run the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


# Specification
Your task is to implement a Rest-API for our electric vehicle charging station management system.
Notes:
* Use Typescript to implement service. You are free to choose any supporting framework(s) (we mostly use NestJS)
* You are free to choose any kind of database that fits you the best.
* You must use the provided database schema in your implementation. However, feel free to add/modify everything as needed.
* Pay attention to the scalability of the API.
* In the same GPS coordinates, you can find multiple stations that belong to different companies
* One charging company can own one or more other charging companies.
Hence the parent company should have access to all its children companies' stations, hierarchically. For example, we have 3 companies
A, B, and C owning respectively 10, 5 and 2 charging stations. Company B belongs to A and company C belongs to B.
Then we can say that company A owns 17, company B owns 7, and company C owns 2 charging stations in total.

## Database Schema
```
Station (id, name, latitude, longitude, company_id, address)
Company (id, parent_company_id, name)
```

## Task 1
Your API should support CRUD for both stations and companies.

## Task 2
Implement an endpoint that gets all charging stations.
* Within the radius of n kilometers from a point (latitude, longitude), your station list is ordered by increasing distance, and stations in the
same location are grouped.
* Your list includes all the children stations in the tree, for the given company_id.

## Requirements
* Code is maintainable
* Test coverage
* API documentation
* Dockerize the project

## Extra Points
* CI/CD (deploy the project to a cloud service of your choosing)
