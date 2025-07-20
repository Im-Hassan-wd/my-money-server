const User = require("../models/authModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    const { displayName } = user;

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, displayName, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup user
const signupUser = async (req, res) => {
  const { email, password, displayName } = req.body;

  try {
    const user = await User.signup(email, password, displayName);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, displayName, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginUser,
  signupUser,
};
