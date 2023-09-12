const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv").config();

const dbConnect = require("./dbConnect");
const getAllLoans = require("./controllers/loansController");
const repayLoan = require("./controllers/repaymentControllers");
const requestLoan = require("./controllers/loanRequestController");
const userLogin = require("./controllers/loginController");
const userSignup = require("./controllers/signupController");
const getLoanRequest = require("./controllers/loanActiveRequests");
const singleLoan = require("./controllers/singleloan");
const payInstallment = require("./controllers/payinstallment");

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

//  MongoDB connection
dbConnect();

//  routes
app.get("/", (req, res) => {
  res.send("Server running");
  res.end();
});

app.post("/signup", userSignup);
app.post("/login", userLogin);

// Get all loans
app.get("/active-loans", getAllLoans);

// Loan request
app.post("/apply", requestLoan);

// loan repayment route
app.post("/repay", repayLoan);

// loan request lists
app.post("/loan-requests", getLoanRequest);

// single loan
app.post("/loandetails", singleLoan);
app.post("/payInstallment", payInstallment);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
