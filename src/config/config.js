import mongoose from "mongoose";
import dotenv from "dotenv";

import db from "../models/index.js";

const Role = db.role;

// const { default: mongoose } = require("mongoose");
// const dotenv = require("dotenv");

dotenv.config();
// console.log(process.env.CONNECTION_STRING_ATLAS)
export const databaseConnection = () => {
  mongoose
    .connect(process.env.CONNECTION_STRING_ATLAS)
    .then(() => {
      console.log("Database Connection has been made");
ler
      initial();

    })
    .catch((err) => {
      console.log("err");
    });
};


function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added `user` to roles collection");
      });
      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added `admin` to roles collection");
      });
      new Role({
        name: "moderator",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added `moderator` to roles collection");
      });
    }
  });
}

