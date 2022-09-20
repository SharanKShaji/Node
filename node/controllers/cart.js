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
};

module.exports = { cartController };
