const categoryRepo = require("../db/repositories/category");
const Category = require("../db/models/category");

const create = async (req, res) => {
  try {
    const { title, content, parentId } = req.body;
    const model = new Category(title, content, parentId);
    const category = await categoryRepo.create(model);
    res.send({
      success: true,
      category,
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

const getAll = async (req, res) => {
  try {
    const category = await categoryRepo.getAll();
    res.send({
      success: true,
      category,
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
    const category = await categoryRepo.get(req.params.id);
    res.send({
      success: true,
      category,
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
    const { title, content, parentId } = req.body;
    const model = new Category(title, content, parentId);
    const category = await categoryRepo.update(req.params.id, model);
    res.send({
      success: true,
      category,
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
    const category = await categoryRepo.delete(req.params.id);
    res.send({
      success: true,
      category,
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
