const userRepo=require('../db/repositories/user')
const User=require('../db/models/user')

const create=async(req,res)=>{
    try{
        const {name, fname, lname, username, email, password, intro} =req.body;
        const userModel=new User(name, fname, lname, username, email, password, intro)
        const user=await userRepo.create(userModel)
        res.send(user)
    }catch(err){
        console.log(JSON.stringify(err));
        res.status(500).send(err)
    }
}

const getAll=async(req,res)=>{
    try{
        const user=await userRepo.getAll();
        res.send(user)
    }catch(err){
        console.log(JSON.stringify(err));
        res.status(500).send(err)
    }
}
const get=async(req,res)=>{
    try{
        const user=await userRepo.get(req.params.id)
        res.send(user)
    }catch(err){
        console.log(JSON.stringify(err));
        res.status(500).send(err)
    }
}
const update=async(req,res)=>{
    try{
        const {name, fname, lname, username, email, password, intro} =req.body;
        const userModel=new User(name, fname, lname, username, email, password, intro)
        const user=await userRepo.update(req.params.id,userModel);
        res.send(user)
    }catch(err){
        console.log(JSON.stringify(err));
        res.status(500).send(err)
    }
}

module.exports={
    create,getAll,get,update
}