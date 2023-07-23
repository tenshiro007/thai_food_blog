const tagRepo=require('../db/repositories/tag')
const Tag=require('../db/models/tag')

const create=async(req,res)=>{
    try{
        const {title, content} =req.body;
        const model=new Tag(title, content)
        const tag=await tagRepo.create(model)
        res.send(tag)
    }catch(err){
        console.log(JSON.stringify(err));
        res.status(500).send(err)
    }
}

const getAll=async(req,res)=>{
    try{
        const tag=await tagRepo.getAll();
        res.send(tag)
    }catch(err){
        console.log(JSON.stringify(err));
        res.status(500).send(err)
    }
}
const get=async(req,res)=>{
    try{
        const tag=await tagRepo.get(req.params.id)
        res.send(tag)
    }catch(err){
        console.log(JSON.stringify(err));
        res.status(500).send(err)
    }
}
const update=async(req,res)=>{
    try{
        const {title, content} =req.body;
        const model=new Tag(title, content)
        const tag=await tagRepo.update(req.params.id,model);
        res.send(tag)
    }catch(err){
        console.log(JSON.stringify(err));
        res.status(500).send(err)
    }
}
const deleteRecord=async(req,res)=>{
    try{
        const tag=await tagRepo.delete(req.params.id)
        res.send(tag)
    }catch(err){
        console.log(JSON.stringify(err));
        res.status(500).send(err)
    }
}

module.exports={
    create,getAll,get,update,deleteRecord
}