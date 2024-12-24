
const checkLoginCredentials = require('../middleware/checkLoginCredentials')
const loginController = async (req, res) => {
  try {
    const { telephone, password } = req.body;
    const user = await checkLoginCredentials(telephone, password);
    if (!user) {
      return res.json({
        status: 400,
        data: null,
        message: 'User not found or Invalid Credentials.'
    })
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "8h",
      });
  
      return res.status(200).json({
        status: 200,
        message: "User Logged In successfully",
        data: token,
      });
    }catch (error) {
        return res.status(500).json({
            status: 500,
            message: error.message,
            data: null,
          });
}
}
module.exports = { loginController }
