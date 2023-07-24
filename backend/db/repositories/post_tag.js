const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  async create(model) {
    return  await prisma.post_tag.create({
      data: model,
    });
  },
  async getAll() {
    return await prisma.post_tag.findMany();
  },
  async get(id) {
    return await prisma.post_tag.findUnique({
      where: { id },
    });
  },
  async update(id,model){
    return await prisma.post_tag.update({
        where:{id},
        data:model
    })
  },
  async delete(id){
    return await prisma.post_tag.delete({
        where:{id}
    })
  }
};