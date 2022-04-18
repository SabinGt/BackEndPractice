const express = require("express");
const route = express.Router();
const userController = require("../controllers/userController");

route.get("/", userController.getUsers);
route.get("/:id", userController.getSingleUser);
route.delete("/user/:id", userController.getSingleUser)
route.post("/add",userController.postUser)
route.put("/user/:id", userController.updateSingleUser)
module.exports = route;
