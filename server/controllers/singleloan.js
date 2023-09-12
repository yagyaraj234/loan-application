const LoanRequest = require("../model/loanRequestSchema");
const singleLoan = async (req, res) => {
  try {
    const {id} = req.body;
    console.log(req.body);
    console.log(id);
    const loans = await LoanRequest.find({ _id: id });
    res.status(200).json(loans);
  } catch (error) {
    console.error("Error getting all loans:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = singleLoan;
