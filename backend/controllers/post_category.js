const postCategoryRepo = require("../db/repositories/post_category");
const PostCategory = require("../db/models/post_category");

const create = async (req, res) => {
  try {
    const { postId, categoryId } = req.body;
    const model = new PostCategory(postId, categoryId);
    console.log(model);
    const postCategory = await postCategoryRepo.create(model);
    res.send({
      success: true,
      postCategory,
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
    const postCategory = await postCategoryRepo.getAll();
    res.send({
      success: true,
      postCategory,
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
    const postCategory = await postCategoryRepo.get(req.params.id);
    res.send({
      success: true,
      postCategory,
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
    const { postId, categoryId } = req.body;
    const model = new PostCategory(postId, categoryId);
    const postCategory = await postCategoryRepo.update(req.params.id, model);
    res.send({
      success: true,
      postCategory,
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
    const postCategory = await postCategoryRepo.delete(req.params.id);
    res.send({
      success: true,
      postCategory,
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
