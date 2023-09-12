# loan-application

This is a web-based loan application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to create an account, log in to their existing account, apply for loans, view their active loans, and make installment repayments. This README.md file provides all the information reviewers need to run and use the app.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Application Features](#application-features)
- [Folder Structure](#folder-structure)
- [Tech Stack](#tech-stack)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed on your machine.
- [MongoDB](https://www.mongodb.com/) installed and running locally or have access to a MongoDB server.
- [Git](https://git-scm.com/) for version control.

## Getting Started

To run this application locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yagyaraj234/loan-application.git

   ```

2. Change to the project directory:

`cd loan-app` 
3. Go to Server Folder
` cd server` 
4. Install the server-side dependencies
   ``` npm install```
5. Run server
```node server.js```

6. Go to Client server
```cd client```

7. Install frontend dependencies
```npm install```

8. Run server
```npm  start```
## Application Features
### User Authentication
Users can create an account with a unique username and password.
Users can log in to their existing account securely using JWT authentication.
### Loan Application
Authenticated users can apply for loans by providing necessary information such as loan amount, duration, and interest rate.
Users can view the status of their loan applications and whether they have been approved or rejected.
### Active Loans
Users can see a list of their active loans, including details such as loan amount, outstanding balance, and due dates.
### Repay Installment
Users can make installment repayments for their active loans.
The application will calculate the remaining balance and update the loan status accordingly.

