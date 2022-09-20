const {dbConnection}=require("../library/database")
const cartFunction=async(cartData)=>{
    const db=dbConnection();
    try{
        const u_id=await db.query("INSERT INTO cart_items(cart_id,product_id,quantity,item_total) VALUES(?,?,?,?)",[cartData.cart_id,cartData.Productid,cartData.quantity,cartData.Productprice])
        return true;
    }
    catch(error){
        return error;
    }
    finally{
        await db.close();
    }
}




module.exports={cartFunction}