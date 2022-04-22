import express from "express";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;
import cors from "cors";
import contactRoute from "./src/routes/contact.route.js";
import authRoute from "./src/routes/auth.routh.js";
import gituhubRoute from "./src/routes/project.route.js";
import { databaseConnection } from "./src/config/config.js";
const app = express();

//middleware
app.use(express.json());
app.use(cors());

//user auth route
app.use("/user/auth", authRoute);

//user contact routing
app.use("/user/contact", contactRoute);

//project routing
app.use("/user/project", gituhubRoute);

//database connection
databaseConnection();

app.listen(PORT, () => {
  console.log("sever is running on " + PORT);
});
