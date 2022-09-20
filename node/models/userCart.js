const {dbConnection}=require("../library/database")

const userCartFunction=async(cart_id)=>{
    const db = dbConnection();
    try{
        const cartID=cart_id
       const result= await db.query('SELECT cart_id,quantity,name,image_id,price,cart_items.id,stock FROM cart_items INNER JOIN product ON cart_items.product_id=product.id INNER JOIN cart ON cart_items.cart_id=cart.id where cart_id=?',[cartID]);
       const total=await db.query('SELECT cart_id,price,sum(item_total) as TOTAL FROM cart_items INNER JOIN product ON cart_items.product_id=product.id INNER JOIN cart ON cart_items.cart_id=cart.id where cart_id=?',[cartID]);
       return [result,total];
    }
    catch(error){
        return error;
    }
    finally{
        await db.close();
    }
}

module.exports={userCartFunction}