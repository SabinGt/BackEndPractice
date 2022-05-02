import axios from "axios";
import mongoose from "mongoose";
import db from "../models/index.js"
const Projects = db.project;

//add to database 
const postGithubData = async (req, res)=>{
    try{
        const projects = await axios.get("https://api.github.com/users/SabinGt/repos?per_page=3");
        const projectDetails = projects.data.map((projects)=>({
           name:projects.name,
           description:projects.description,
           dataCreated: new Date(projects.created_at).toDateString(),
           link:projects.html_url

        }))
        return res.send(projectDetails)
    }catch(err){
        console.log(err)
    }
}

export default {postGithubData}