const express=require('express')
const dotenv=require('dotenv').config()
const app=express();
app.use(express.json())

app.get('/',(req,res)=>{
    console.log('hello');
    res.send('heeelo')
})
const port =process.env.PORT||3000
app.listen(port,()=>{
    console.log(`Server run at port ${port}`);
})