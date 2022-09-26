const models = require("../models/admin");
const express = require("express");
const app = express();
app.use(express.json());

const admUserController = async (req, res) => {
  try {
    const result = await models.admUserfunction();
    res.json({ success: true, result: result }).status(200);
    return true;
  } catch (error) {
    console.log(error,"kkkk");
    return false;
  }
};

const admProductController = async (req, res) => {
  console.log(req,"Product Controller Data");
  try {
    const result = await models.admProductfunction();
    res.json({ success: true, result: result }).status(200);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const admaddProductController = async (req, res) => {
  console.log(req.body,"CHECK****");
  try {
    const addData = {
      category: req.body.category,
      supplier: req.body.supplier,
      name: req.body.name,
      image: req.body.image,
      price: req.body.price,
      description: req.body.description,
      stock: req.body.stock,
      status: req.body.status,
    };
    console.log(addData,"CONTRO");
    const result = await models.admAddProductfunction(addData);
    console.log(result,"ERR");
    res.json({ success: true, result: result }).status(200);
    return true;
  } catch (error) {
    console.log(error);
    res.json({ success: false, result: error }).status(500);
    return false;
  }
};

const admDltPrdtController = async (req, res) => {
  try {
    const id=req.body.id;
    const result = await models.admDltPrdtFunction(id);
    res.json({ success: true, result: result }).status(200);
  } catch (error) {
    console.log(error);
    res.json({ success: false, result: error }).status(500);
    return false;
  }
};

const admEditController=async(req,res)=>{
  try{
    const id=req.body.id
    const result=await models.admEditFunction(id);
    res.json({ success: true, result: result }).status(200);
  } catch (error) {
    console.log(error);
    return false;
  }
}

const admEditDataController=async(req,res)=>{
  try{
    const EditData={
      id:req.body.id,
      category: req.body.category,
      supplier: req.body.supplier,
      name: req.body.name,
      image: req.body.image,
      price: req.body.price,
      description: req.body.description,
      stock: req.body.stock,
      status: req.body.status,
    }
    console.log(EditData,"89999");
    const result=await models.admEditDataFunction(EditData);
    res.json({ success: true, result: result }).status(200);
  } catch (error) {
    console.log(error);
    return false;
  }
}
module.exports = {
  admUserController,
  admProductController,
  admaddProductController,
  admDltPrdtController,
  admEditController,
  admEditDataController
};
