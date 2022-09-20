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

router.post('/Signup',signUpController)
router.post('/Login',loginController)
router.get('/shoppingCart',verifyJWT,shoppingCartcontroller)
router.post('/cart',cartController)
router.post('/userCart',verifyJWT,userCartController)
router.post('/incrCount',incrCountController)
router.post('/decrCount',decrCountController)
router.post('/remove',rmvController)

module.exports = router;