const {SchoolSubject,Assignments,Tests}=require("../models/organize")
const { body } = require('express-validator');
const router = require("../Routes");

exports.getsubjectById=(req,res,next,id)=>{
    SchoolSubject.findById(id)
    .exec((err,subject)=>{
        if(err){
            res.status(400).json({
                error:"Subject NOT found"
            })
        }
        req.subject=subject;
        next();
    })
}

exports.createSubject=(req,res)=>{
    const subject=new SchoolSubject(req.body)

    subject.save((err,subject)=>{
        if(err){
            console.log(err)
            return res.status(400).json({
                err:"NOT able to save subject in DB"
            });
        }
        res.json({
            name:subject.name,
            description:subject.description,
            status:subject.status,
            grades:subject.grades,
            userId:subject.user
        })
    })
}

exports.getSubject=(req,res)=>{
    return res.json(req.subject);
}

exports.deleteSchoolSubject=(req,res)=>{
    const subject=req.subject;

    subject.remove((err,deletedsubject)=>{
        if (err) {
            return res.status(400).json({
              error: "FAILED to delete the subject",
            });
          }
          res.json({
            message: `Deletion of ${deletedsubject.name} was Successfull`,
          });
    })
}

exports.updateSubject=(req,res)=>{
    SchoolSubject.findByIdAndUpdate(
        {_id:req.subject._id},
        {$set:req.body},
        {new:true,useFindAndModify:false},
        (err,subject)=>{
            if(err){
                res.status(400).json({
                    error:"UNABLE to update this infornmation"
                })
            }
            res.json(subject)
        }
    )
}

//Assignments
exports.getassignmentById=(req,res,next,id)=>{
    Assignments.findById(id)
    .exec((err,assign)=>{
        if(err){
            res.status(400).json({
                error:"Work NOT found"
            })
        }
        req.assign=assign;
        next();
    })
}

exports.createAssignments=(req,res)=>{
    const assign=new Assignments(req.body)

    assign.save((err,assign)=>{
        if(err){
            return res.status(400).json({
                err:"NOT able to create assignment"
            })
        }
        res.json({
            name:assign.name,
            description:assign.description,
            subject:assign.subject,
            deadline:assign.deadline,
            status:assign.status
        })
    })
}

exports.getAssignment=(req,res)=>{
    return res.json(req.assign)
}

exports.deleteAssignment=(req,res)=>{
    const assign=req.assign

    assign.remove((err,deletedassign)=>{
        if (err) {
            return res.status(400).json({
              error: "FAILED to delete the assignment",
            });
          }
          res.json({
            message: `Deletion of ${deletedassign.name} was Successfull`,
          });
    })
}

exports.updateAssignment=(req,res)=>{
    Assignments.findByIdAndUpdate(
        {_id:req.assign._id},
        {$set:req.body},
        {new:true,useFindAndModify:false},
        (err,assign)=>{
            if(err){
                res.status(400).json({
                    error:"UNABLE to update this infornmation"
                })
            }
            res.json(assign)
        }
    )
}

//Tests
exports.gettestById=(req,res,next,id)=>{
    Tests.findById(id)
    .exec((err,test)=>{
        if(err){
            res.status(400).json({
                error:"Test NOT found"
            })
        }
        req.test=test
        next()
    })
}

exports.createTest=(req,res)=>{
    const test=new Tests(req.body)

    test.save((err,test)=>{
        if(err){
            res.status(400).json({
                error:"NOT able to create test"
            })
        }
        res.json(test)
    })
}

exports.getTest=(req,res)=>{
    return res.json(req.test)
}

exports.deleteTest=(req,res)=>{
    const test=test.assign

    test.remove((err,deletedtest)=>{
        if (err) {
            return res.status(400).json({
              error: "FAILED to delete the test",
            });
          }
          res.json({
            message: `Deletion of ${deletedtest.name} was Successfull`,
          });
    })
}