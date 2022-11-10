// const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const db = require('./config/mongoose')
const userRoutes = require("./routes/userRoutes");
const cors = require('cors');

//use() function is used to mount the specified middleware function (are the functions that have access to the request object 
//and response object, or we can call it a response-request cycle) at the path which is being specified.
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/user', userRoutes)
// const db = require();

app.set('secretKey', "Voosh");


app.listen(port, () => {
    console.log("Server is running on port" + port)
});