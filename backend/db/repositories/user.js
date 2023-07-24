const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  async create(model) {
    return await prisma.user.create({
      data: model,
    });
  },
  async getAll() {
    return await prisma.user.findMany();
  },
  async get(id) {
    return await prisma.user.findUnique({
      where: { id },
    });
  },
  async update(id, model) {
    return await prisma.user.update({
      where: { id },
      data: model,
    });
  },
  async delete(id) {
    return await prisma.user.delete({
      where: { id },
    });
  },
  async getUsername(username, email) {
    return await prisma.user.findFirst({
      where: {
        OR: [
          {
            username: username,
          },
          {
            email: email,
          },
        ],
      },
    });
  },
};
