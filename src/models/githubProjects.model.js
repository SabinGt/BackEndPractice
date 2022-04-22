import mongoose from "mongoose";
const Project = mongoose.model(
    "Projects",
    mongoose.Schema({
        name:{
            type: String,
        },
        description:{
            type: String,
        },
        link:{
            type: String
        }
    })
)

export default Project