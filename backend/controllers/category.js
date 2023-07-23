const categoryRepo=require('../db/repositories/category')
const Category=require('../db/models/category')

const create=async(req,res)=>{
    try{
        const {title, content, parentId} =req.body;
        const model=new Category(title, content, parentId)
        const category=await categoryRepo.create(model)
        res.send(category)
    }catch(err){
        console.log(JSON.stringify(err));
        res.status(500).send(err)
    }
}

const getAll=async(req,res)=>{
    try{
        const category=await categoryRepo.getAll();
        res.send(category)
    }catch(err){
        console.log(JSON.stringify(err));
        res.status(500).send(err)
    }
}
const get=async(req,res)=>{
    try{
        const category=await categoryRepo.get(req.params.id)
        res.send(category)
    }catch(err){
        console.log(JSON.stringify(err));
        res.status(500).send(err)
    }
}
const update=async(req,res)=>{
    try{
        const {title, content, parentId} =req.body;
        const model=new Category(title, content, parentId)
        const category=await categoryRepo.update(req.params.id,model);
        res.send(category)
    }catch(err){
        console.log(JSON.stringify(err));
        res.status(500).send(err)
    }
}
const deleteRecord=async(req,res)=>{
    try{
        const category=await categoryRepo.delete(req.params.id)
        res.send(category)
    }catch(err){
        console.log(JSON.stringify(err));
        res.status(500).send(err)
    }
}

module.exports={
    create,getAll,get,update,deleteRecord
}