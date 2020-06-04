const express=require('express');
const app=express();
var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.send('Hello World');
})
app.listen(5000,()=>{
    console.log('server is started')
})
