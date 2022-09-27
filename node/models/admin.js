const {dbConnection}=require("../library/database")

const admUserfunction=async()=>{
    const db = dbConnection();
    try{
        let result = await db.query("SELECT id,username,cart_id FROM users where cart_id !=''");
        return result;
        
    }
    catch(error){
        return error;
    }
    finally{
        await db.close();
    }
}

const admUserDetailsfunction=async(id)=>{
    const db = dbConnection();
    try{
        let result = await db.query('SELECT * from users where id=?',[id]);
        return result;
        
    }
    catch(error){
        return error;
    }
    finally{
        await db.close();
    }
}

const admProductfunction=async()=>{
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

const admAddProductfunction=async(addData)=>{
    console.log(addData,"5555");
    const db = dbConnection();
    try{
        let result = await db.query('INSERT INTO product (category_id,supplier_id,name,image_id,price,description,stock,status) VALUES(?,?,?,?,?,?,?,?)',[addData.category,addData.supplier,addData.name,addData.image,addData.price,addData.description,addData.stock,addData.status]);
        return result;
    }
    catch(error){
        return error;
    }
    finally{
        await db.close();
    }
}

const admDltPrdtFunction=async(id)=>{
    const db=dbConnection()
    try{
        let result = await db.query('DELETE FROM product WHERE id=?',[id]);
        return result;
        
    }
    catch(error){
        return error;
    }
    finally{
        await db.close();
    }

}

const admEditFunction=async(id)=>{
    const db=dbConnection()
    try{
        let result = await db.query('SELECT * FROM product WHERE id=?',[id]);
        return result;
        
    }
    catch(error){
        return error;
    }
    finally{
        await db.close();
    }
}

const admEditDataFunction=async(EditData)=>{
    const db=dbConnection()
    console.log(EditData,"<MODELLL");
    try{
        await db.query('update product set category_id=?,supplier_id=?,name=?,image_id=?,price=?,description=?,stock=?,status=? where id=?',[EditData.category,EditData.supplier,EditData.name,EditData.image,EditData.price,EditData.description,EditData.stock,EditData.status,EditData.id]);
        return true;
        
    }
    catch(error){
        return error;
    }
    finally{
        await db.close();
    }
}



module.exports={admUserfunction,admProductfunction,admAddProductfunction,admDltPrdtFunction,admEditFunction,admEditDataFunction,admUserDetailsfunction}