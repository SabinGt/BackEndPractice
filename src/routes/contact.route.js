import contactController from "../controllers/contact.controller.js";
// const express = require("express");
import express from "express";
const contactRoute = express.Router();

contactRoute.get("/", contactController.getContactUsers);
contactRoute.get("/:id", contactController.getSingleContactUser);
contactRoute.delete("/:id", contactController.deleteSingleContactUser);
contactRoute.post("/", contactController.postContactUser);
contactRoute.put("/:id", contactController.updateSingleContactUser);

export default contactRoute;
