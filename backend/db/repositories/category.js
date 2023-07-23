const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  async create(model) {
    return  await prisma.category.create({
      data: model
    });
  },
  async getAll() {
    return await prisma.category.findMany({
      include: {
        children: true,
      },
    });
  },
  async get(id) {
    return await prisma.category.findUnique({
      where: { id },
      include: {
        children: true,
      },
    });
  },
  async update(id,model){
    return await prisma.category.update({
        where:{id},
        data:model
    })
  },
  async delete(id){
    return await prisma.category.delete({
        where:{id}
    })
  }
};