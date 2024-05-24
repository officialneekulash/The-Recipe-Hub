const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Register = async (req, res) => {
  const { username,password } = req.body;


  let userCheck = await User.findOne({username });
  
  if (userCheck) {
    return res.status(400).send({ message: "Username or email already exist" });
  }

  bcrypt
    .hash(password, 10)
    .then((hashedPassword) => {
      const user = new User({
        username: username,
    
        password: hashedPassword,
        
      });

      user.save().then((result) => {
        res.status(201).send({
          message: "user created successfully",
          result,
        });
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "password was not hashed.",
        Error: err,
      });
    });
};

const Login = (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username: username })
    .then((result) => {
      bcrypt.compare(password, result.password, (err, data) => {
        if (err) {
          throw err;
        }

        const token = jwt.sign(
          {
            id: result._id,
            username: username,
          },
          "RANDOM-TOKEN"
        );

        if (data) {
          return res.status(200).send({
            message: "Login sucess",
            token,
          });
        } else {
          return res.status(401).send({
            message: "invalid credentials",
          });
        }
      });
    })
    .catch((err) => {
      res.status(404).send({
        message: "User doesnot exist.",
        err,
      });
    });
};

const Profile = (req, res) => {
  res.send({
    message: "you are authorized to access.",
    user: req.user,
  });
};

module.exports = { Register, Login, Profile };