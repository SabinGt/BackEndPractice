import contactController from "../controllers/contact.controller.js";
// const express = require("express");
import express from "express";
import authJwt from "../middlewares/authJwt.js";
const contactRoute = express.Router();

contactRoute.get("/",[authJwt.verifyToken],contactController.getContactUsers);
contactRoute.get("/:id", contactController.getSingleContactUser);
contactRoute.delete("/:id", contactController.deleteSingleContactUser);
contactRoute.post("/", contactController.postContactUser);
contactRoute.put("/:id", contactController.updateSingleContactUser);

export default contactRoute;
