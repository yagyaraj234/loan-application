const mongoose = require("mongoose");

const loanRequestSchema = new mongoose.Schema({
  // Define loan request schema fields here
  amount: { type: Number, default: 10000 },
  Remaining: {
    type: Number,
    default: function () {
      return this.amount; 
    },
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  term: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: "Requested",
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("LoanRequest", loanRequestSchema);
