const express = require("express");

// controller function
const { signupUser, loginUser } = require("../controllers/authController");

const router = express.Router();

// login
router.post("/login", loginUser);

router.get("/login", (req, res) => {
  res.json({ mssg: "GET login :)" });
});

// signup
router.post("/signup", signupUser);

module.exports = router;
