const models = require("../models/cart");
const express = require("express");
const app = express();
app.use(express.json());

const cartController = async (req, res) => {
  cartData = {
    Productid: req.body.Productid,
    Productname: req.body.Productname,
    Productprice: req.body.Productprice,
    Productimg: req.body.Productimg,
    stock: req.body.stock,
    quantity: req.body.quantity,
    username: req.body.username,
    user_id:req.body.user_id,
    cart_id:req.body.cart_id
  };
  const cartResult = await models.cartFunction(cartData);
  res.json({ success: true, result: cartResult}).status(200);
  console.log(cartResult,"RSLT");

};
const incrCountController=async(req,res)=>{
  const id=req.body.id;
  const result=await models.incrCountFunction(id);
  res.json({ success: true, result: result}).status(200);
}
const decrCountController=async(req,res)=>{
  const id=req.body.id;
  const result=await models.decrCountFunction(id);
  res.json({ success: true, result: result}).status(200);
}

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

  const userCartController=async(req,res)=>{
    const cart_id=req.body.cartid
    const [result,total]=await models.userCartFunction(cart_id);
    res.json({ success: true, result: result,total }).status(200);
    
  }

module.exports = { cartController,incrCountController,decrCountController,rmvController,userCartController };
