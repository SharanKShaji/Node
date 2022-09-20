const models=require("../models/shoppingCart")
const express = require('express');
const app = express();
app.use(express.json());

const shoppingCartcontroller=async(req,res)=>{
    const result= await models.shoppingCartfunction();
    res.json({ success: true, result: result }).status(200);
}



module.exports={shoppingCartcontroller}