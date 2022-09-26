const express=require("express");
const app=express();
app.use(express.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

const router=require("./routes/router")
app.use('/',router)

app.listen(9000,(req,res)=>{
  console.log('Running');
})

