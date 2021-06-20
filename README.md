# Allocate - To organize the process of work of the manager
## Nest JS, Typescript, Typeorm, Postgre

## Installation and run

Need to create database and set database environment variables

| Env |
| ------ |
| PORT |
| DB_HOST |
| DB_PORT |
| DB_USERNAME |
| DB_PASSWORD |
| DB_DATABASE |

Install the dependencies and start server

```sh
npm install
npm run start:dev
```

## How To Use

- Create User
  POST http://localhost:3000/users with body:
  {
  "name" : "Name Example",
  "surname" : "Surname Example",
  "amount": 2000
  }
- Create Strategy
  POST http://localhost:3000/strategy with body:
  {
  "name": "Name Example",
  "country": "Country example"
  }
- Allocate
  POST http://localhost:3000/allocate with body:
  {
  "strategyPercentage": [{
  "id": "strategy1Id",
  "percent": 20
  }, {
  "id": "strategy2Id",
  "percent": 5
  }],
  "usersIds": [
  "user1Id",
  "User2Id"
  ]}

## Result
Data will be added in usersStrategy table with user and strategy its own percentage.
After allocate user will be charged
