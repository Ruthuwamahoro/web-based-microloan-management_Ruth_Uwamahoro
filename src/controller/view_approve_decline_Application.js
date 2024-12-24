const Loan = require('../models/Loan');

const ViewSingleApplications = async (req, res) => {
    try {
        const loan = await Loan.findById(req.params.id);
        if (!loan) {
            return res.status(404).json({ message: "Loan application not found" });
        }
        res.json(loan);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
const ApproveOrDeclineApplication = async (req, res) => {
    try {
        const loan = await Loan.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
        if (!loan) {
            return res.status(404).json({ message: "Loan application not found" });
        }
        if (req.body.status === 'approved' || req.body.status === 'declined') {
            return res.status(200).json({ message: "Loan application status updated successfully" });
        } else {
            return res.status(400).json({ message: "Invalid status" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const ViewAllApplications = async (req, res) => {
    try {
        const loans = await Loan.find(); 
        return res.status(200).json({ status: 200, data: loans, message: "Loan application status updated successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { ViewSingleApplications, ViewAllApplications, ApproveOrDeclineApplication };