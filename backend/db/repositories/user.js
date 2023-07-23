const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  async create(model) {
    const user = await prisma.user.create({
      data: model,
    });
    return user;
  },
  async getAll() {
    const users = await prisma.user.findMany();
    return users;
  },
  async get(id) {
    const users = await prisma.user.findUnique({
      where: { id },
    });
    return users;
  },
  async update(id,name, fname, lname, username, email, password, intro){

  }
};