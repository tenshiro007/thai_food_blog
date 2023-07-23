const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  async create(name, fname, lname, username, email, password, intro) {
    const user = await prisma.user.create({
      data: {
        name,
        fname,
        lname,
        username,
        email,
        password,
        intro,
      },
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
};