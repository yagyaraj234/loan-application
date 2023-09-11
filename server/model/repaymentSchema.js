const mongoose = require("mongoose");

const repaymentSchema = new mongoose.Schema({
  amountPaid: {
    type: Number,
    required: true,
  },
  // Add more fields as needed

  // Reference to the loan for which this repayment is made
  loan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Loan",
  },
});

module.exports = mongoose.model("Repayment", repaymentSchema);
