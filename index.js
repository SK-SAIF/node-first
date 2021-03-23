const express = require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("Thank you very much...YAY")
});

app.listen(3000,()=>console.log("Listening to port no 3000"));