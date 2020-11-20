  
const Loan = require("../models/loan")

exports.newLoan = (req, res) => {
 // console.log(req.body);

 const loan = new Loan(req.body);
 
 loan
  .save()
  .then(() => console.log("new loan saved"))
  .then(() => calculateLoanDetails())
 // calculateLoanDetails();

 res.redirect('/');
}

exports.calculateLoanDetails = function(){
 Loan
  .find({
     _id: "5fb7a6e40fc65c432c6233d8"
    }, {}, (err, document) => {
   if(!err){
    // console.log(document);
    calculate(document);
   }
  })
}

function calculate(document){
 // console.log(document);
 let {
  totalAmount: P,
  numberOfYears: T,
  interestRate: R,
  marginMoney,
  paymentStarted,
  paymentFromBeginning,
  paymentNotFromBeginning,
  numberOfYearsLeft: n,
  moratoriumPeriod: M,
  currentYear: c,
  interestPaidDuringMoratorium
 } = document[0];

 let SI, currentDebt, totalDebt, emi, amtPaid;

  P = P - marginMoney;
  if (paymentStarted && paymentFromBeginning) {
  emi = (P * (R / 12/100) * Math.pow(1 + (R / 12/100), T * 12)) / (Math.pow(1 + (R / 12/100), T * 12) - 1);
  totalDebt = emi*(T*12);
  currentDebt = totalDebt - emi * (c*12);
 }
 else if (paymentStarted && paymentNotFromBeginning){
  if (interestPaidDuringMoratorium) {
   SI = P + P * (R / 100) * M;
   emi = (P * (R / 12/100) * Math.pow(1 + (R / 12/100), T * 12)) / (Math.pow(1 + (R / 12/100), T * 12) - 1);
   amtPaid = SI + emi*((c - M)*12);
   totalDebt = SI + emi * (T - M);
   currentDebt = totalDebt - amtPaid;
  }
  else {
   SI = P + P * (R / 100) * M;
   emi = (P * (R / 12/100) * Math.pow(1 + (R / 12/100), T * 12)) / (Math.pow(1 + (R / 12/100), T * 12) - 1);
   amtPaid = emi * (c - M)
   totalDebt = SI + emi * (T - M);
   currentDebt = totalDebt - amtPaid;
  }
 }
 else if (interestPaidDuringMoratorium) {
  amtPaid = P * (R / 100) * c;
  SI = P + P * (R / 100) * (M - c);
  emi = (P * (R / 12/100) * Math.pow(1 + (R / 12/100), T * 12)) / (Math.pow(1 + (R / 12/100), T * 12) - 1);
  totalDebt = SI + emi * (T - M);
  currentDebt = totalDebt - amtPaid;
 }
 else {
  SI = P + P * (R / 100) * M;
  emi = (P * (R / 12/100) * Math.pow(1 + (R / 12/100), T * 12)) / (Math.pow(1 + (R / 12/100), T * 12) - 1);
  totalDebt = SI + emi * (T - M);
  currentDebt = totalDebt;
 }

 console.log(`SI: ${Math.ceil(SI)}`)
 console.log(`EMI: ${Math.ceil(emi)}`)
 console.log(`totalDebt: ${Math.ceil(totalDebt)}`)
 console.log(`currentDebt: ${Math.ceil(currentDebt)}`)

 Loan.updateOne({
  "__v": 0
 }, {
   "emi": Math.ceil(emi),
   "totalDebt": Math.ceil(totalDebt),
   "currentDebt": Math.ceil(currentDebt)
 }, (err, doc) => {
  if(!err) 
   console.log(doc);
 });
}

exports.getLoan = async () => {
  let doc = await Loan.find({
    _id: "5fb7a6e40fc65c432c6233d8"
  })
  return doc;
}


// "interestPaidDuringMoratorium" : true,
// "moratoriumPeriod": 2,
// "currentYear": 1,