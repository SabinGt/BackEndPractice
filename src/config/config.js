import mongoose from "mongoose";
import dotenv from "dotenv";

// const { default: mongoose } = require("mongoose");
// const dotenv = require("dotenv");

dotenv.config();
// console.log(process.env.CONNECTION_STRING_ATLAS)
export const databaseConnection = () => {
  mongoose
    .connect(process.env.CONNECTION_STRING_ATLAS)
    .then(() => {
      console.log("Database Connection has been made");
    })
    .catch((err) => {
      console.log("err");
    });
};
