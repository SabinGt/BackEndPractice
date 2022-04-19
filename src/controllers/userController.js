const mongoose = require("mongoose");
const UserModel = require("../models/userModel");

//add the user
const postUser = async (req, res) => {
  let userData = new UserModel({
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
  });
  const user = await userData.save();   

  if (!user) {
    console.log("no user");
  }
  res.status(200).send(user);
};

const getUsers = async (req, res) => {
  const users = await UserModel.find();
  if (!users) {
    console.log("no users");
  }
  res.status(200).send(users);
};

const getSingleUser = async (req, res) => {
  console.log(req.params.id);
  const singleUser = await UserModel.findById(req.params.id);

  if (!singleUser) {
    console.log("no user");
  }
  res.status(200).send(singleUser);
};

const deleteSingleUser = async (req, res) => {
  const deleteUser = await UserModel.findByIdAndRemove(req.params.id);
  if (!deleteUser) {
    res.status(500).json({
      success: false,
      message: "User of id is not available",
    });
  }
  return res.status(201).json({
    success: true,
    message: "user deleted successfully",
  });
};

const updateSingleUser = async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(500).json({
      message: "User id not available",
    });
  }
  const updateUser = await UserModel.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender,
    },
    { new: true }
  );
  if (!updateUser) {
    res.status(500).json({
      success: false,
      message: "User of id is not available",
    });
  }
  return res.status(201).json({
    success: true,
    message: "user updated successfully",
  });
};

module.exports = {
  getUsers,
  getSingleUser,
  deleteSingleUser,
  updateSingleUser,
  postUser,
};
