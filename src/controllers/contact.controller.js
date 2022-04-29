import mongoose from "mongoose";
import db from "../models/index.js";
const Contact = db.contact;
import { sendMail } from "../helper/sendMail.js";

//add the contact user
const postContactUser = async (req, res) => {
  let contactUser = new Contact({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });

  try {
    const User = await contactUser.save();
    if (!User) {
      res.status(500).send({
        message:"Server error"
      });
    }
    if(sendMail(User.email)){
      const updateduser = await Contact.findByIdAndUpdate(
        User._id,
        {status: true},
        { new: true }
      )
      res.status(200).send(updateduser);
    }
    
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "user cannot be added",
    });
  }
};

//get all the contact user
const getContactUsers = async (req, res) => {
  try {
    const contactUser = await Contact.find({isDelete:false});
    console.log(contactUser)
    if (!contactUser) {
      throw new Error("err");
    }
    res.status(200).send(contactUser);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "User not found",
    });
  }
};

//get single contact user
const getSingleContactUser = async (req, res) => {
  try {
    const singleContactUser = await Contact.findOne({
      $and:[{_id:req.params.id},{isDelete:false}]
    }).select("-isDelete");

    if (!singleContactUser) {
      throw new Error("no user");
    }
    res.status(200).send(singleContactUser);
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "There is no user",
    });
  }
};

//delete single contact user
const deleteSingleContactUser = async (req, res) => {
  try {
    const deleteSingleContactUser = await Contact.findByIdAndUpdate(
      req.params.id,
        {isDelete: true}
    );
    if (!deleteSingleContactUser) {
      throw new Error("error");
    }
    res.status(201).json({
      success: true,
      message: "user deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "User of id is not available",
    });
  }
};

const updateSingleContactUser = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      throw new Error("err");
    }
    const updateSingleContactUser = await Contact.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
      },
      { new: true }
    );
    if (!updateSingleContactUser) {
      throw new Error("next");
    }
    res.status(201).json({
      success: true,
      message: "user updated successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "User of id is not available",
    });
  }
};

export default {
  postContactUser,
  getContactUsers,
  getSingleContactUser,
  deleteSingleContactUser,
  updateSingleContactUser,
};
