const Express= require("express");
const router= Express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel= require("../Models/UserModel")

const updateUserOptions = {
    runValidators: true,
  };


  router.get("/user-login", (req, res, next) => {
    const { email, password } = req.body;
      UserModel.find({email : email})
      .then(async (response) => {
        if (response.length > 0) {
          const hashedPass = response[0].password;
          // Load hash from your password DB.
          const match = await bcrypt.compare(password, hashedPass);
          if (match) {
            const token = jwt.sign(
                {
                  email: response[0].email
                },
                process.env.JWT_SECRET_KEY,
                { expiresIn: 60 * 60 }
              );
              //console.log(token);
              res.status(200).json({
                message: "Logged in successfully!!!",
                data: response,
                token: token,
              });
            } else {
              res.status(200).json({
                message: "Email or password don't match",
                data: response,
              });
            }
          } else {
            res.status(200).json({
              message: "No users found!!!",
              data: response,
            });
          }
        })
        .catch((err) => {
          if (err) {
            res.status(400).json({
              message: err.message,
              error: err,
            });
          }
        });
    });


    module.exports=router;