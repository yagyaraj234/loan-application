const LoanRequest = require("../model/loanRequestSchema");

const requestLoan = async (req, res) => {
  try {
    const { amount, userId } = req.body;
    const term = req.body.term;

    // new loan request
    const newLoanRequest = new LoanRequest({
      amount: amount,
      installment: amount / term,
      user: userId,
      term: Number(term),
    });

    // Save the new loan request to the database
    await newLoanRequest.save();

    res.status(201).json({ message: "Requested" });
  } catch (error) {
    console.error("Error applying for a loan:", error.message); // Log the error message
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get all loans

module.exports = requestLoan;
