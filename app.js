import express from "express";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;
import contactRoute from "./src/routes/contact.route.js";
import { databaseConnection } from "./src/config/config.js";

const app = express();


//middleware
app.use(express.json());


//user contact routing
app.use("/user/contact", contactRoute);





//database connection
databaseConnection();

app.listen(PORT, () => {
  console.log("sever is running on " + PORT);
});
