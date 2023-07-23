const User=require('../models/user')

const create=async(req,res)=>{
    try{
        const {name, fname, lname, username, email, password, intro} =req.body;
        const user=await User.create(name, fname, lname, username, email, password, intro)
        res.send(user)
    }catch(err){
        console.log(JSON.stringify(err));
        res.status(500).send(err)
    }
}

const getAll=async(req,res)=>{
    try{
        const user=await User.getAll();
        res.send(user)
    }catch(err){
        console.log(JSON.stringify(err));
        res.status(500).send(err)
    }
}
const get=async(req,res)=>{
    try{
        const user=await User.get(req.params.id)
        res.send(user)
    }catch(err){
        console.log(JSON.stringify(err));
        res.status(500).send(err)
    }
}

module.exports={
    create,getAll,get
}