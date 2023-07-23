const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  async create(model) {
    return  await prisma.post.create({
      data: model,
    });
  },
  async getAll() {
    return await prisma.post.findMany();
  },
  async get(id) {
    return await prisma.post.findUnique({
      where: { id },
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