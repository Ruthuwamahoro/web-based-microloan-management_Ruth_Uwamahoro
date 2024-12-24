const express = require("express");
const { isAuthenticated, isAdmin, isEnd_User} = require("../middleware/authenticate")
const { ApplyLoan } = require("../controller/loanController")
const { ViewSingleApplications, ViewAllApplications, ApproveOrDeclineApplication } = require("../controller/view_approve_decline_Application")
const routerLoan = express.Router()

routerLoan.post('/applyloan', isAuthenticated, isEnd_User, ApplyLoan)
routerLoan.get('/applications/:id', isAuthenticated, isAdmin, ViewSingleApplications)
routerLoan.get('/applications', isAuthenticated, isAdmin, ViewAllApplications)
routerLoan.patch('/applications/', isAuthenticated, isAdmin, ApproveOrDeclineApplication)

module.exports = routerLoan;