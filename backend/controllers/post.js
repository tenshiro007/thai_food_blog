const postRepo = require("../db/repositories/post");
const Post = require("../db/models/post");

const create = async (req, res) => {
  try {
    const { title,content,published,authorId,parentId } = req.body;
    const model = new Post(title,content,published,authorId,parentId);
    console.log(model);
    const post = await postRepo.create(model);
    res.send(post);
  } catch (err) {
    console.log(err);
    console.log(JSON.stringify(err));
    res.status(500).send(err);
  }
};

const getAll = async (req, res) => {
  try {
    const post = await postRepo.getAll();
    res.send(post);
  } catch (err) {
    console.log(JSON.stringify(err));
    res.status(500).send(err);
  }
};
const get = async (req, res) => {
  try {
    const post = await postRepo.get(req.params.id);
    res.send(post);
  } catch (err) {
    console.log(JSON.stringify(err));
    res.status(500).send(err);
  }
};
const update = async (req, res) => {
  try {
    const { title,content,published,authorId,parentId } = req.body;
    const model = new Post(title,content,published,authorId,parentId);
    const post = await postRepo.update(req.params.id, model);
    res.send(post);
  } catch (err) {
    console.log(JSON.stringify(err));
    res.status(500).send(err);
  }
};
const deleteRecord = async (req, res) => {
  try {
    const post = await postRepo.delete(req.params.id);
    res.send(post);
  } catch (err) {
    console.log(JSON.stringify(err));
    res.status(500).send(err);
  }
};

module.exports = {
  create,
  getAll,
  get,
  update,
  deleteRecord,
};
