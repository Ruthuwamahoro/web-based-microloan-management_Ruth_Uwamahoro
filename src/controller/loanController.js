const Loan = require('../models/Loan');


const ApplyLoan = async (req, res) => {
    try {
      const {amount, monthly_income} = req.body 
      
      if(amount <= 1/3*monthly_income){

          const loanSubmission  = new Loan({
            amount,
            monthly_income
           });
            await loanSubmission.save()
            return res.status(200).json({
                status: 200,
                message: "Successfully Applied",
                data: token,
            });
      }
      return res.status(200).json({
        status: 400,
        message: "Your Amount should not exceed one third of your monthly income",
        data: token,
    });
    } catch (err) {
      return res.status(200).json({
        status: 500,
        message: error.message,
        data: null,
      });
    }
};

module.exports = { ApplyLoan }