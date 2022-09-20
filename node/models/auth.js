const { json } = require('express');
const {dbConnection} = require('../library/database');
const signUpFunction=async(data)=>{
    const db=dbConnection();

    try{
    const userReg=await db.query("INSERT INTO users (username, password, first_name,last_name,phone,email,address_id) VALUES (?,?,?,?,?,?,?)",
    [data.username, data.password, data.first_name, data.last_name, data.phone, data.email, data.address]);
    console.log("Successfully Inserted");
    const cartReg=await db.query("INSERT INTO cart(user_id) values(?)",[userReg.insertId]);
    const cart_id=await db.query("SELECT id FROM cart where user_id=?",[userReg.insertId]);
    result=JSON.parse(JSON.stringify(cart_id))
    console.log(result[0].id,"#fff");
    const cartUser=await db.query("UPDATE users set cart_id=? where id=?",[result[0].id,userReg.insertId])
    return true;
    }

    catch(error){
        console.log(error);
        return false
    }
    
    finally{
        db.close();
    }
}

const loginFunction=async(loginData)=>{
    const db = dbConnection();
    try{
        let result= await db.query('SELECT id,cart_id FROM users WHERE username=? AND password=?', 
                                    [loginData.username.trim(), loginData.password.trim( 
                                    )]);  

        console.log(result,"Queryresult");                         
        return result;
        
    }
    catch(error){
        return error;
    }
    finally{
        await db.close();
    }
}


module.exports={signUpFunction,loginFunction}