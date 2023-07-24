const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  async create(model) {
    return  await prisma.post_comment.create({
      data: model,
    });
  },
  async getAll() {
    return await prisma.post_comment.findMany();
  },
  async get(id) {
    return await prisma.post_comment.findUnique({
      where: { id },
    });
  },
  async update(id,model){
    return await prisma.post_comment.update({
        where:{id},
        data:model
    })
  },
  async delete(id){
    return await prisma.post_comment.delete({
        where:{id}
    })
  }
};