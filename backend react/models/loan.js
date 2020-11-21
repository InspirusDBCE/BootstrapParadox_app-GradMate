const mongoose = require("mongoose")
const {ObjectId} =mongoose.Schema;

const loanSchema = new mongoose.Schema({
 totalAmount: Number,
 numberOfYears: Number,
 interestRate: Number,
 marginMoney: Number,
 paymentStarted: Boolean,
 paymentFromBeginning: Boolean,
 paymentNotFromBeginning: Boolean,
 numberOfYearsLeft: Number,
 moratoriumPeriod: Number,
 currentYear: Number,
 interestPaidDuringMoratorium: Boolean,
 emi: Number,
 totalDebt: Number,
 currentDebt: Number,
 user:{
    type:ObjectId,
    ref:"User",
    required:true
}
}, {
 collection: "loan"
})

const Loan = mongoose.model("Loan", loanSchema);

module.exports = Loan;