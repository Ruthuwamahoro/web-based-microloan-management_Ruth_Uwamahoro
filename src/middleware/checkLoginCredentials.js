import bcrypt from 'bcryptjs';
const User = require("../models/user.model");


const checkLoginCredentials = async (
  telephone,
  password
) => {
  try {
    const user = await User.findOne({ telephone });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return null;
    }
    return user;
  } catch (err) {
    throw err;
  }
};
module.exports = { checkLoginCredentials }