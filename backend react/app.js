require('dotenv').config()

const mongoose=require("mongoose")
const express=require("express")
const app=express()
const bodyParser=require("body-parser")
const cookieParser=require("cookie-parser")
const cors=require("cors")

const Routes=require("./Routes")

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log("DB CONNECTED");
});

app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

app.use("/api",Routes);

const port=process.env.PORT || 5500;

//Starting a server
app.listen(port,()=>{
    console.log(`app is running at ${port}`);
})