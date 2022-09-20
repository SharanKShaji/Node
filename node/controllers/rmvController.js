const models=require("../models/remove");
const express = require("express");
const app = express();
app.use(express.json());
const rmvController=async(req,res)=>{
console.log(req.body,"bodyDelete");
const rmvID=req.body.removeId
const result=await models.removeFunction(rmvID)
if(result){
res.json({ success: true, result: result}).status(200);
}
else{
    res.json({ success: false, result: result}).status(500);
}
}

module.exports={rmvController}