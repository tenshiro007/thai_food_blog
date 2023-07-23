const User=require('../models/user')

const create=(req,res)=>{
    res.send('create')
}

const getAll=(req,res)=>{
    console.log(req.body);
    res.send('getAll')
}
const get=(req,res)=>{
    console.log(req.body);
    res.send('get')
}

module.exports={
    create,getAll,get
}