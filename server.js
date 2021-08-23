const express= require('express');  // import express module 
const app=express();

app.use(express.static('public'));

const port = 5000;
app.listen(port,function(){
    console.log(`listening at port ${port}`);
});
