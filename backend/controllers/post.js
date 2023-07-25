const postRepo = require("../db/repositories/post");
const Post = require("../db/models/post");

const create = async (req, res) => {
  try {
    const files = req.files;
    if (!files || files.length === 0) {
      console.log({ message: 'No files uploaded.' });
      // return res.status(400).json({ message: 'No files uploaded.' });
    }

    const filenames = files.map((file) => file.filename);
    console.log(filenames);

    const { title, content, published, authorId, parentId } = req.body;
    const model = new Post(title, content, published, authorId, parentId);
    console.log(model);
    const post = await postRepo.create(model);
    res.send({
      success: true,
      post: post,
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
    const post = await postRepo.getAll();
    res.send({
      success: true,
      post: post,
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
    const post = await postRepo.get(req.params.id);
    res.send({
      success: true,
      post: post,
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
    const { title, content, published, authorId, parentId } = req.body;
    const model = new Post(title, content, published, authorId, parentId);
    const post = await postRepo.update(req.params.id, model);
    res.send({
      success: true,
      post: post,
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
    const post = await postRepo.delete(req.params.id);
    res.send({
      success: true,
      post: post,
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
const uploadSingleImage=async(req,res)=>{
  console.log('uploading...');
  const file = req.file;
  console.log(file);
  if (!file) {
    return res.status(400).json({ message: 'No file uploaded.' });
  }
  return res.status(200).json({ message: 'File uploaded successfully.', filename: file.filename });
}
const uploadManyImage=async(req,res)=>{
  const files = req.files;
  if (!files || files.length === 0) {
    return res.status(400).json({ message: 'No files uploaded.' });
  }

  const filenames = files.map((file) => file.filename);
  return res.status(200).json({ message: 'Files uploaded successfully.', filenames: filenames });
}

module.exports = {
  create,
  getAll,
  get,
  update,
  deleteRecord,
  uploadSingleImage,
  uploadManyImage
};
