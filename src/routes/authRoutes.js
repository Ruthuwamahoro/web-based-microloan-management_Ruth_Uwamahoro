const { loginController } = require("../controller/loginController")
const { createUser } = require("../controller/loginController")

const express = require("express");
const routerAuth = express.Router()
routerAuth.post('/users/auth/login', loginController)
routerAuth.post('/users/auth/signup', createUser)

module.exports= routerAuth