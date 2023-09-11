const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  // remainingBalance: {
  //   type: Number,
  //   required: true,
  // },
  // Add more fields as needed

  // Reference to the user who applied for the loan
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Loan', loanSchema);
