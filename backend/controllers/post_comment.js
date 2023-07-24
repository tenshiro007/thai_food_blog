const postCommentRepo = require("../db/repositories/post_comment");
const PostComment = require("../db/models/post_comment");

const create = async (req, res) => {
  try {
    const { title, content, parentId, authorId, postId } = req.body;
    const model = new PostComment(title, content, parentId, authorId, postId);
    console.log(model);
    const postComment = await postCommentRepo.create(model);
    res.send({
      success: true,
      postComment,
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
    const postComment = await postCommentRepo.getAll();
    res.send({
      success: true,
      postComment,
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
    const postComment = await postCommentRepo.get(req.params.id);
    res.send({
      success: true,
      postComment,
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
    const { title, content, parentId, authorId, postId } = req.body;
    const model = new PostComment(title, content, parentId, authorId, postId);
    const postComment = await postCommentRepo.update(req.params.id, model);
    res.send({
      success: true,
      postComment,
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
    const postComment = await postCommentRepo.delete(req.params.id);
    res.send({
      success: true,
      postComment,
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
