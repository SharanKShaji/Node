const jwt=require("jsonwebtoken")

const verifyJWT=(req,res,next)=>{
    try{
        const token=req.headers.token;
        // const cart_id=req.body.cart_id
        // console.log(cart_id,"6666");
        // console.log(res,"NNN");
        // console.log(token,"token");
        jwt.verify(token,"jwtsecretkey");
        next();
    }
    catch{
        res.json({success:false,message:'User is not authorised'}).status(500);
    }

}

module.exports={verifyJWT}

