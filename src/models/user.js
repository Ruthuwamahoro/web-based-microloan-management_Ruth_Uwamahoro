const mongoose = require("mongoose");
const { migrate } = require('mongoose-migrate');


const userSchema = new mongoose.Schema({
  _id: { type: String, required: true, unique: true, trim: true, primary: true, },
  first_name: { type: String, required: true, unique: true,
    trim: true,minlength: 50 },
  last_name: { type: String, required: true, unique: true,
        trim: true, minlength: 50},  
  user_type: {
    type: String,enum: ['end_user', 'admin']
  },
  telephone: { type: String, required: true, minlength: 10 },
  password: { type: String, required: true,     minlength: 8, },
});
migrate(Loan, {
  migrationsDir: './migrations',
  migrationFileExtension: '.js',
  useFileHash: true,
  useTransaction: true,
});
userSchema.index({ username: 1, email: 1 }, { unique: true });
const User = mongoose.model('User', userSchema);
module.exports = User;
