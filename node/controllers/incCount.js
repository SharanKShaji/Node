const models=require("../models/incrCount");
const express = require("express");
const app = express();
app.use(express.json());
const incrCountController=async(req,res)=>{
    const id=req.body.id;
    const result=await models.incrCountFunction(id);
    res.json({ success: true, result: result}).status(200);

}

module.exports={incrCountController}