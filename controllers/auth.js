const { StatusCodes } = require("http-status-codes");

const User = require("../models/User");

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT();

  return res.status(201).json({ success: true, user: { name: user.name }, token });
};

module.exports = { register }
