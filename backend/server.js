const express = require("express");
const app=express();
const port=process.env.PORT;
const mongoose=require("mongoose");

const cors=require("cors");
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
const UploadRoutes=require("./routes/UploadRoutes");


app.use(UploadRoutes)
mongoose.connect(process.env.MONGO_URI).then(()=>{console.log("mongodb connected");}).catch((err)=>{console.log(err);})


app.listen(port,function(){
    console.log(`server is listening at: ${port}`);
})