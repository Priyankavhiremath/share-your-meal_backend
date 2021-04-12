const RegisteredUser = require("../models/registeredUser");
const bcrypt = require("bcrypt");

// READ
const getAllUsers = async (req, res, next) => {
  try {
    const getUsers = await RegisteredUser.find();
    res.json(getUsers);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

// READ
const getOneUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const getUser = await RegisteredUser.findById({ _id: id });
    if (!getUser) return res.status(404).send("No such user");
    res.json(getUser);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

// READ
const getMe = async (req, res, next) => {
  const id = req.user._id;
  //   console.log(id);
  try {
    const getUser = await RegisteredUser.findById({ _id: id });
    if (!getUser) return res.status(404).send("No such user");
    // console.log(getUser);
    res.json(getUser);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

// CREATE
const createOneUser = async (req, res, next) => {
  const { email, password, nickName, location, languages } = req.body;
  try {
    const newUser = new RegisteredUser({
      email,
      nickName,
      location,
      languages,
      password: await bcrypt.hash(password, 10),
    });
    await newUser.save();

    const token = newUser.createToken();
    res.set("x-authorization-token", token).send("User created successfully");
  } catch (e) {
    res.status(500).send(e.message);
  }
};

// UPDATE
const update = async (req, res, next) => {
  const { id } = req.params;
  const { property, value } = req.body;
  console.log({ id, property, value });
  try {
    const updatedUser = await RegisteredUser.findOneAndUpdate(
      { _id: id },
      { [property]: value },
      { new: true }
    );
    res.json(updatedUser);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

// DELETE
const deleteOneUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await RegisteredUser.findByIdAndDelete(id);
    if (!deletedUser) res.status(404).send("No such user");
    res.json(deletedUser);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createOneUser,
  deleteOneUser,
  update,
  getMe,
};
