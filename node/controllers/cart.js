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
    user_id: req.body.user_id,
    cart_id: req.body.cart_id,
  };
  try {
    const cartResult = await models.cartFunction(cartData);
    res.json({ success: true, result: cartResult }).status(200);
    console.log(cartResult, "cartResult");
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
const incrCountController = async (req, res) => {
  try {
    const id = req.body.id;
    const result = await models.incrCountFunction(id);
    res.json({ success: true, result: result }).status(200);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
const decrCountController = async (req, res) => {
  try {
    const id = req.body.id;
    const result = await models.decrCountFunction(id);
    res.json({ success: true, result: result }).status(200);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const rmvController = async (req, res) => {
  try {
    console.log(req.body, "bodyDelete");
    const rmvID = req.body.removeId;
    const result = await models.removeFunction(rmvID);
    if (result) {
      res.json({ success: true, result: result }).status(200);
    } else {
      res.json({ success: false, result: result }).status(500);
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const userCartController = async (req, res) => {
  try {
    const cart_id = req.body.cartid;
    const [result, total] = await models.userCartFunction(cart_id);
    res.json({ success: true, result: result, total }).status(200);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = {
  cartController,
  incrCountController,
  decrCountController,
  rmvController,
  userCartController,
};
