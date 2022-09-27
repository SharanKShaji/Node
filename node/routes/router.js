const express = require('express');

const router = express.Router();
const {verifyJWT} = require("../middlewares/verifyJWT")
const{signUpController}=require("../controllers/auth")
const{loginController}=require("../controllers/auth");
const { shoppingCartcontroller } = require('../controllers/shoppingCart');
const { cartController } = require('../controllers/cart');
const { userCartController } = require('../controllers/cart');
const { incrCountController } = require('../controllers/cart');
const { decrCountController } = require('../controllers/cart');
const { rmvController } = require('../controllers/cart');
const { admUserController, admProductController, admaddProductController, admDltPrdtController, admEditController, admEditDataController, admUserDetailsController } = require('../controllers/admin');

router.post('/Signup',signUpController)
router.post('/Login',loginController)
router.get('/shoppingCart',verifyJWT,shoppingCartcontroller)
router.post('/cart',cartController)
router.post('/userCart',verifyJWT,userCartController)
router.post('/incrCount',incrCountController)
router.post('/decrCount',decrCountController)
router.post('/remove',rmvController)
router.get('/userData',admUserController)
router.get('/productData',admProductController)
router.post('/Addproduct',admaddProductController)
router.post('/Deleteproduct',admDltPrdtController)
router.post('/showProduct',admEditController)
router.put('/editData',admEditDataController)
router.post('/userDetails',admUserDetailsController)


module.exports = router;