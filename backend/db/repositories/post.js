const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  async create(model) {
    return  await prisma.post.create({
      data: model,
    });
  },
  async getAll() {
    return await prisma.post.findMany({
      include:{
        children:true,
        post_tag:true,
        post_category:true,
        post_comment:true
      }
    });
  },
  async get(id) {
    return await prisma.post.findUnique({
      where: { id },
      include:{
        children:true,
        post_tag:true,
        post_category:true,
        post_comment:true
      }
    });
  },
  async update(id,model){
    return await prisma.post.update({
        where:{id},
        data:model
    })
  },
  async delete(id){
    return await prisma.post.delete({
        where:{id}
    })
  }
};