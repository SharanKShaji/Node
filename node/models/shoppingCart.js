const {dbConnection}=require("../library/database")

const shoppingCartfunction=async()=>{
    const db = dbConnection();
    try{
        let result = await db.query('SELECT * FROM product');
        return result;
        
    }
    catch(error){
        return error;
    }
    finally{
        await db.close();
    }
}

module.exports={shoppingCartfunction}