const LoanRequest = require("../model/loanRequestSchema")
const getLoanRequest = async (req, res) => {
    try {
      const { user } = req.body;
      console.log(user);
      const loans = await LoanRequest.find({ user: user });
      res.status(200).json(loans);
    } catch (error) {
      console.error("Error getting all loans:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  module.exports = getLoanRequest;