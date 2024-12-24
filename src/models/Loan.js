const mongoose = require("mongoose");
const { migrate } = require('mongoose-migrate');


const loanSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true,
    trim: true, },
  amount: { type: String, required: true, unique: true,
        trim: true, },  
  monthly_income: {
    type: String,
  },
  status: { type: String, required: true, enum: ['pending', 'approved', 'declined'] },
});

const Loan = mongoose.model('Loan', loanSchema);

migrate(Loan, {
  migrationsDir: './migrations',
  migrationFileExtension: '.js',
  useFileHash: true,
  useTransaction: true,
});

module.exports = Loan;
