// controllers/repaymentController.js
const Repayment = require("../model/repaymentSchema");
const Loan = require("../model/loanSchema");

// Repay a loan
const repayLoan = async (req, res) => {
  try {
    const { loanId, amountPaid } = req.body;

    // Create a new repayment record
    const newRepayment = new Repayment({ amountPaid, loan: loanId });
    await newRepayment.save();

    // Update the loan's remaining balance
    const loan = await Loan.findById(loanId);
    loan.remainingBalance -= amountPaid;
    await loan.save();

    res.status(201).json(newRepayment);
  } catch (error) {
    console.error("Error making a repayment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = repayLoan;
