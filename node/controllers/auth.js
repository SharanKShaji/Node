const models = require('../models/auth')
const express = require('express');
const app = express();
app.use(express.json());
const jwt = require('jsonwebtoken');

const signUpController=async(req,res)=>{
    const userData={
         username : req.body.username,
         password : req.body.password,
         first_name : req.body.first_name,
         last_name : req.body.last_name,
         phone : req.body.phone,
         email : req.body.email,
         address_id : req.body.address
    }
    if(userData.username.trim().length===0){
        res.status(200).send({ success: false, message: 'Username is not valid'});
        console.log("user-error");
    }
    else if(userData.password.trim().length===0){
        res.status(200).send({ success: false, message: 'Password is not valid'});
    }
    else if(userData.first_name.trim().length===0){
        res.status(200).send({ success: false, message: 'First Name is not valid'});
    }
    else if(userData.last_name.trim().length===0){
        res.status(200).send({ success: false, message: 'Last Name is not valid'});
    }
    else if(userData.phone.trim().length===0){
        res.status(200).send({ success: false, message: 'Phone is not valid'});
    }
    else if(userData.email.trim().length===0){
        res.status(200).send({ success: false, message: 'Email is not valid'});
    }
    else if(userData.address_id.trim().length===0){
        res.status(200).send({ success: false, message: 'Address is not valid'});
    }
    else{
        const result = await models.signUpFunction(userData)
        if (result){
        console.log(result.cart_id,"logResult");
        res.status(200).send({ success: true, message: 'Registration successfull'});
        }  
        else{
        res.status(500).send({ success: false, message: 'Registration error'})
        } 
    }
}

const loginController=async(req,res)=>{
    const loginData={
        username:req.body.username,
        password:req.body.password
    }
    if(loginData.username.trim().length===0){
        res.status(200).send({ success: false, message: 'Username is not valid'});
        console.log("user-error");
    }
    else if(loginData.password.trim().length===0){
        res.status(200).send({ success: false, message: 'Password is not valid'});
    }
    else{
        const result = await models.loginFunction(loginData)
        if (result.length>0){
        const id=result[0].id;
        const cart_id=result[0].cart_id
        const token=jwt.sign({id},'jwtsecretkey',{expiresIn:'2hr'})
        res.json({ success: true, message: 'Login Successfull',user:loginData.username,token:token,id:id,cart_id:cart_id}).status(200);
        }  
        else{
        res.status(500).send({ success: false, message: 'Login error'})
        } 

    }   

}

module.exports={signUpController,loginController}