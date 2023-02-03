const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("Damn This works!");
})

app.listen(5000,()=>{
    console.log('listening');
})