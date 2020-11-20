const express=require("express")
const router=express.Router()
const { check } = require('express-validator');

const {getUserById,getUser,updateUser,userPurchaseList}=require("./controllers/user")
const {signout,signup,signin,isSignedIn,isAuthenticated,isAdmin}=require("./controllers/auth")

const {
    organize,
    createSubject,
    getsubjectById,
    getSubject,
    deleteSchoolSubject,
    updateSubject,
    createAssignments,
    getassignmentById,
    getAssignment,
    deleteAssignment,    
    updateAssignment,
    gettestById,
    createTest,
    getTest,
    deleteTest
}=require("./controllers/organize");
const {job}=require("./controllers/job")
const {
 newLoan,
 calculateLoanDetails,
 getLoan
} = require("./controllers/loan")

router.param("userId",getUserById);

router.post("/signup",[
    check("name","Name should be atleast 3 char long").isLength({min:3}),
    check("email","Email is required").isEmail(),
    check("password","Password should be atleast 5 char long").isLength({min:5})
],signup);

router.post("/signin",
[
    check("email","Email is required").isEmail(),
    check("password","Password field is required").isLength({min:1})
],
signin
);

router.get("/signout",signout)

router.get("/user/:userId",isSignedIn,isAuthenticated,getUser);
router.put("/user/:userId",isSignedIn,isAuthenticated,updateUser);

//School Subject
router.param("schoolsubjectId",getsubjectById)

router.post("/student/schoolsubject/:userId",isSignedIn,isAuthenticated,createSubject)
router.get("/student/schoolsubject/:schoolsubjectId",getSubject)

router.delete("/student/schoolsubject/delete/:schoolsubjectId",deleteSchoolSubject)

router.put("/student/schoolsubject/update/:schoolsubjectId",updateSubject)

//Assignments
router.param("assignmentId",getassignmentById)

router.post("/assignments/create/:userId",isSignedIn,isAuthenticated,createAssignments)
router.get("/assignments/:assignmentId",getAssignment)

router.delete("/assignments/delete/:assignmentId",deleteAssignment)

router.put("/assignments/update/:assignmentId",updateAssignment)

//tests
router.param("testId",gettestById)
router.post("/tests/create/:userId",isSignedIn,isAuthenticated,createTest)
router.get("/tests/:testId",getTest)

router.delete("tests/delete/:testId",deleteTest)

//loan
router.post("/loan/:userId",isSignedIn,isAuthenticated, newLoan)
router.post("/loan", newLoan)
// calculateLoanDetails();



//testing ejs
router.get("/", (req, res) => {
    getLoan().then(doc => {
        res.render("index", {
            totalDebt: doc[0].totalDebt,
            currentDebt: doc[0].currentDebt,
            emi: doc[0].emi
        })
    });
})




module.exports=router;