const mongoose=require("mongoose")
const {ObjectId} =mongoose.Schema;

const schoolSubject=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        maxlength:52
    },
    user:{
        type:ObjectId,
        ref:"User",
        required:true
    }
},
    {timestamps:true}
)

const SchoolSubject=mongoose.model("SchoolSubject",schoolSubject);

const assignments=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        maxlength:52
    },
    description:{
        type:String,
        trim:true,
        required:true,
        maxlength:2000
    },
    subject:{
        type:ObjectId,
        ref:"SchoolSubject",
        required:true,
    },
    deadline:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        default:false
    },
    user:{
        type:ObjectId,
        ref:"User",
        required:true
    }
},
    {timestamps:true}
)

const Assignments=mongoose.model("Assginments",assignments)

const tests=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        maxlength:52
    },
    date:{
        type:String,
        required:true
    },
    subject:{
        type:ObjectId,
        ref:"SchoolSubject",
        required:true
    },
    user:{
        type:ObjectId,
        ref:"User",
        required:true
    }
},
    {timestamps:true}
)

const Tests=mongoose.model("Tests",tests)

module.exports={SchoolSubject,Assignments,Tests}