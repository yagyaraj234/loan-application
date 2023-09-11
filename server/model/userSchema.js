const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  // You can add more fields for user profile information here

  // Loans associated with the user
  loans: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Loan",
    },
  ],

  // Repayments associated with the user
  repayments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Repayment",
    },
  ],

  // Loan requests made by the user
  loanRequests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LoanRequest",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
