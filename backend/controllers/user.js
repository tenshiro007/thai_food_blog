const userRepo = require("../db/repositories/user");
const User = require("../db/models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const create = async (req, res) => {
  try {
    const { name, fname, lname, username, email, password, intro } = req.body;
    const userModel = new User(
      name,
      fname,
      lname,
      username,
      email,
      password,
      intro
    );
    // console.log(userModel);
    if (!username) {
      throw new Error("Username is required");
    }
    if (!password) {
      throw new Error("Password is required");
    }
    var pass_hash = bcrypt.hashSync(password, 8);
    // console.log('pass_hash|'+pass_hash);
    userModel.password = pass_hash;
    // console.log(userModel);
    const user = await userRepo.create(userModel);
    const payload = { userId: user.id, username: user.username };
    const token = jwt.sign(payload, process.env.SECRET_KEY);
    res.send({
      success: true,
      message: "Register Successfully",
      token: token,
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
const login = async (req, res) => {
  try {
    const { name, fname, lname, username, email, password, intro } = req.body;
    console.log(username);
    if (!username && !email) {
      throw new Error("Username or Email is required");
    }
    if (!password) {
      throw new Error("Password is required");
    }
    const user = await userRepo.getUsername(username, email);
    console.log(user);
    if (!user) {
      throw new Error("Username or email is not found");
    }
    var islogin = bcrypt.compareSync(password, user.password);
    if (islogin) {
      const payload = { userId: user.id, username: user.username };
      const token = jwt.sign(payload, process.env.SECRET_KEY);
      res.send({
        success: true,
        message: "Login Successfully",
        token: token,
      });
    } else {
      throw new Error("Invalid username or password");
    }
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
    const user = await userRepo.getAll();
    res.send({
      success: true,
      user: user,
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
    const user = await userRepo.get(req.params.id);
    res.send({
      success: true,
      user: user,
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
    const { name, fname, lname, username, email, password, intro } = req.body;
    const userModel = new User(
      name,
      fname,
      lname,
      username,
      email,
      password,
      intro
    );
    const user = await userRepo.update(req.params.id, userModel);
    res.send({
      success: true,
      user: user,
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
    const user = await userRepo.delete(req.params.id);
    res.send({
      success: true,
      user: user,
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
  login,
};
