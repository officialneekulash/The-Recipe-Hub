const express = require("express");
const router = express.Router();
const { Register, Login,Profile } = require("../controllers/user");

const auth = require("../middleware/auth");

router.route("/login").post(Login);
router.route("/register").post(Register);
router.route("/profile").get(auth, Profile);

module.exports = router;