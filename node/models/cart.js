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

const incrCountFunction=async(id)=>{
    console.log(id,"LLLL");
    const db=dbConnection();
try{
    console.log(id,"CHECKING ID");
    await db.query('UPDATE cart_items SET quantity=quantity+1 where id=?',[id]);
    await db.query("UPDATE cart_items INNER JOIN product ON cart_items.product_id=product.id SET cart_items.item_total=product.price*quantity where cart_items.id=?",[id])
    return true;
}
catch(error){
    return error;
}
finally{
    await db.close();
}

}
const decrCountFunction=async(id)=>{
    console.log(id,"Dec_id");
    const db=dbConnection()
    try{
        await db.query('UPDATE cart_items SET quantity=quantity-1 where id=?',[id]);
        await db.query("UPDATE cart_items INNER JOIN product ON cart_items.product_id=product.id SET cart_items.item_total=product.price*quantity where cart_items.id=?",[id])
       return true;
    }
    catch(error){
        return error;
    }
    finally{
        await db.close();
    }
}    

const removeFunction=async(rmvID)=>{
    const db=dbConnection()
    try{
        await db.query('DELETE FROM cart_items where id=?',[rmvID]);
       return true;
    }
    catch(error){
        return error;
    }
    finally{
        await db.close();
    }
    
    }

    
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



module.exports={cartFunction,incrCountFunction,decrCountFunction,removeFunction,userCartFunction}