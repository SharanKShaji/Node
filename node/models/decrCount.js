const {dbConnection}=require("../library/database")
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

module.exports={decrCountFunction}