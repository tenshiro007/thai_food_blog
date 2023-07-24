const postTagRepo = require("../db/repositories/post_tag");
const PostTag = require("../db/models/post_tag");

const create = async (req, res) => {
  try {
    const { postId, tagId } = req.body;
    const model = new PostTag(postId, tagId);
    console.log(model);
    const postTag = await postTagRepo.create(model);
    res.send({
      success: true,
      postTag:postTag,
    });
  } catch (err) {
    console.log(err);
    console.log(JSON.stringify(err));
    res.status(500).send({
      success: false,
      error: err,
      message: err.message,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const postTag = await postTagRepo.getAll();
    res.send({
      success: true,
      postTag:postTag,
    });
  } catch (err) {
    console.log(JSON.stringify(err));
    res.status(500).send({
      success: false,
      error: err,
      message: err.message,
    });
  }
};
const get = async (req, res) => {
  try {
    const postTag = await postTagRepo.get(req.params.id);
    res.send({
      success: true,
      postTag:postTag,
    });
  } catch (err) {
    console.log(JSON.stringify(err));
    res.status(500).send({
      success: false,
      error: err,
      message: err.message,
    });
  }
};
const update = async (req, res) => {
  try {
    const { postId, tagId } = req.body;
    const model = new PostTag(postId, tagId);
    const postTag = await postTagRepo.update(req.params.id, model);
    res.send({
      success: true,
      postTag:postTag,
    });
  } catch (err) {
    console.log(JSON.stringify(err));
    res.status(500).send({
      success: false,
      error: err,
      message: err.message,
    });
  }
};
const deleteRecord = async (req, res) => {
  try {
    const postTag = await postTagRepo.delete(req.params.id);
    res.send({
      success: true,
      postTag:postTag,
    });
  } catch (err) {
    console.log(JSON.stringify(err));
    res.status(500).send({
      success: false,
      error: err,
      message: err.message,
    });
  }
};

module.exports = {
  create,
  getAll,
  get,
  update,
  deleteRecord,
};
