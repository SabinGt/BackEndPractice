const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT
const userRoute = require('./src/routes/userRoute');
const databaseConnection = require('./src/config/config');
const app = express();

//middleware
app.use(express.json());

//routing
app.use('/user',userRoute);

//database connection 
databaseConnection();

app.listen(PORT , ()=>{
    console.log("sever is running on" + PORT)
})
