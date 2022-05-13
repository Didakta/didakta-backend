const jwt = require("jsonwebtoken");

const verifyAdmin = (req, res, next) => {
  const token = req.header("authentication-token");
  if (!token) return res.status(401).send("Access denied");
  try {
    const verified = jwt.verify(token, process.env.SECRET);
    if (token !== process.env.TOKEN) throw err;
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid token");
  }
};

const verifyUser = (req, res, next) => {
  const token = req.header("authentication-token");
  if (!token) return res.status(401).send("Access denied");

  try {
    const user = jwt.verify(token, process.env.SECRET);
    req.user = user;
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

module.exports = { verifyUser, verifyNotLoggedIn, verifyAdmin };
