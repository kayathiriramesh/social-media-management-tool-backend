const Express= require("express");
const router= Express.Router();

const bcrypt = require("bcryptjs");
const UserModel= require("../Models/UserModel")

const updateUserOptions = {
    runValidators: true,
  };

  router.post("/user-register", async (req, res, next) => {
    const { body } = req;
  
    if (body.password) {
      req.body.hashedPassword = await bcrypt.hash(body.password, 10); 
    }
    const UserInstance = new UserModel({
      email: body.email,
      password: body.hashedPassword
    });
    UserInstance.save()
      .then((response) => {
        if (response._id) {
          res.status(200).json({
            message: "User registered",
            data: response,
          });
        }
      })
      .catch((err) => {
        if (err) {
            // console.log(UserInstance);
          res.status(400).json({
            message: err.message,
            error: err,
          });
        }
      });
  });


  module.exports=router;