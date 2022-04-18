const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT
const userRoute = require('./src/routes/userRoute');
const databaseConnection = require('./src/config/config');
const app = express();

//routing
app.use('/Users',userRoute);

app.listen(PORT , ()=>{
    console.log("sever is running on" + PORT)
})
