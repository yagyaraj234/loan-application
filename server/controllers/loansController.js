// controllers/loanController.js
const Loan = require("../model/loanSchema");

// Get all loans
const getAllLoans = async (req, res) => {
  try {
    const loans = await Loan.find();
    res.status(200).json(loans);
  } catch (error) {
    console.error("Error getting all loans:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports = getAllLoans;
