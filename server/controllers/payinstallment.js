const loanRequestSchema = require("../model/loanRequestSchema");

const payInstallment = async (req, res) => {
  try {
    const { payAmount, id } = req.body;
    console.log( payAmount );
    console.log( id );


    const installment = await loanRequestSchema.findOne({ _id: id });

    if (!installment) {
      return res.status(404).json({ message: "No installment found" });
    }

    if (payAmount <= 0) {
      return res.status(400).json({ message: "Invalid payment amount" });
    }

    if (installment.term <= 0 || payAmount > installment.Remaining) {
      return res.status(400).json({ message: "Invalid payment amount" });
    }
    console.log( installment )

    // Update installment details
    installment.term = installment.term - 1;
    installment.Remaining = installment.Remaining - payAmount;
    
    // Save the updated installment to the database
    await installment.save();
    console.log( installment )

    res.json({
      message: "Payment successful",
      updatedInstallment: installment,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = payInstallment;
