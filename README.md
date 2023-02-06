# questionnaire
## Introduction
It’s a WHO-5 questionnaire on patient portal.

## Prerequisites

- Node.js
- MySQL

## Installation

1. Clone the repository:

In the root directory of the project...
2. Change into the project directory:
`cd client`  and `cd server`.
3. Install dependencies on client and server:
`yarn install` or `npm install`.
4. Start the client and server:
`yarn start` or `npm start`.
5. Create the MySQL database and seed it with user data:
`sequelize db:seed:all` or `npm run seed`.

## Usage

The application can be accessed at `http://localhost:3000` in your web browser. 

Users can log in using the seeded user data or create a new account. Once the user is logged in, they will be directed to the questionnaire page. The questionnaire consists of a series of multiple-choice questions, and the user can select their answer for each question by clicking on the appropriate radio button.

The answers will be saved in the MySQL database and can be viewed or edited later, if necessary.


## File Structure

The front-end used React (https://reactjs.org/).

The back-end used Express.(https://expressjs.com/).

The front-end is served on http://localhost:3000/.

The back-end is served on http://localhost:3001/.