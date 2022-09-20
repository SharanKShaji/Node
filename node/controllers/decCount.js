const models=require("../models/decrCount");
const express = require("express");
const app = express();
app.use(express.json());
const decrCountController=async(req,res)=>{
    const id=req.body.id;
    const result=await models.decrCountFunction(id);
    res.json({ success: true, result: result}).status(200);

}

module.exports={decrCountController}