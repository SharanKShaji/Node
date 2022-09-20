const express=require("express");
const app=express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

const router=require("./routes/router")
app.use('/',router)

app.listen(9000,(req,res)=>{
  console.log('Running');
})

