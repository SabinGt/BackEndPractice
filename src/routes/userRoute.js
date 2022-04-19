const express = require("express");
const route = express.Router();
const userController = require("../controllers/userController");

route.get("/", userController.getUsers);
route.get("/:id", userController.getSingleUser);
route.delete("/:id", userController.deleteSingleUser)
route.post("/",userController.postUser)
route.put("/:id", userController.updateSingleUser)
module.exports = route;
