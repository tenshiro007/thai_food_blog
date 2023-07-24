const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  async create(model) {
    return  await prisma.post_category.create({
      data: model,
    });
  },
  async getAll() {
    return await prisma.post_category.findMany();
  },
  async get(id) {
    return await prisma.post_category.findUnique({
      where: { id },
    });
  },
  async update(id,model){
    return await prisma.post_category.update({
        where:{id},
        data:model
    })
  },
  async delete(id){
    return await prisma.post_category.delete({
        where:{id}
    })
  }
};