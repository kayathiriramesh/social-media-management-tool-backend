const express=require("express");
const bodyParser = require("body-parser");
const cors=require("cors");
const bcrypt = require("bcryptjs");
const mongoose =require("mongoose");
//const {CONNECTIONS}= require
//ENV file configuration
require("dotenv").config();
 
//CREATING instance of Express module
const app=express();
app.use(express.json());

mongoose.set('strictQuery',false)
//CORS enabling
app.use(cors());

//Middleware configuration
app.use(bodyParser.json());

//DBCONFIGURATION file importing
require('./dbconfig')
//CONNECTIONS()
const UsersController= require("./Controllers/Register");
const LoginController= require("./Controllers/Login");

app.use("/users",UsersController);
app.use("/login",LoginController);

app.listen(6000);
exports.default=app