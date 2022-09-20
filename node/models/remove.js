const {dbConnection}=require("../library/database")
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

module.exports={removeFunction}
