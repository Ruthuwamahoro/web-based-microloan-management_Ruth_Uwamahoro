
const User = require("../models/user.model");

const createUser = async (
    req,
    res
  ) => {
    const { first_name, last_name, telephone, password } = req.body;

    if (!first_name || !last_name || !telephone  || !password) {
      return res.status(400).json({
        status: 400,
        message: "Missing fields",
        data: null,
      });
    }
  
    try {
      const [existingTelephone] = await Promise.all([
        User.findOne({ telephone })
      ]);
  
      if (existingTelephone) {
        return res.status(400).json({
          status: 400,
          message: "Telephone Number already exists",
          data: null,
        });
      }
  
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        first_name,
        last_name,
        telephone,
        password: hashedPassword,
      });
  
      await newUser.save();
  
      return res.status(201).json({
        status: 201,
        message: "User Registered Successfully",
        data: null,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: "An error occured",
        data: null,
      });
    }
};
module.exports = createUser;
