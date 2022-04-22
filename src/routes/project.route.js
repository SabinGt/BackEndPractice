import express from "express";
import githubController from '../controllers/github.controller.js'
const projectRoute = express.Router()

projectRoute.get("/",githubController.postGithubData)

export default projectRoute