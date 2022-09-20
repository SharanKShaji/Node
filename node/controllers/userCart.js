const models = require("../models/userCart");
const express = require("express");
const app = express();
app.use(express.json());

const userCartController=async(req,res)=>{
const cart_id=req.body.cartid
const [result,total]=await models.userCartFunction(cart_id);
res.json({ success: true, result: result,total }).status(200);

}

module.exports={userCartController}