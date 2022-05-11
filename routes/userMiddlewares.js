const jwt = require("jsonwebtoken");

const verifyAdmin = () => {};

const verifyAPIKey = () => {};

const verifyUser = (req, res, next) => {
  const token = req.header("authentication-token");
  if (!token) return res.status(401).send("Access denied");

  try {
    const verified = jwt.verify(token, process.env.SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid token");
  }
};

const verifyNotLoggedIn = (req, res, next) => {
  const token = req.header("authentication-token");
  if (token) return res.status(402).send("You are already logged in");
  next();
};

module.exports = { verifyAdmin, verifyUser, verifyNotLoggedIn, verifyAPIKey };
