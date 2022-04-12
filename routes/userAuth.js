const express = require("express");
const userAuth = express.Router();
const { registerUser } = require("../controllers/registerUser");
const { loginUser } = require("../controllers/loginUser");
const { getAllUsers, getOneUser } = require("../controllers/getUser");
const { updateUser } = require("../controllers/updateUser");
const { updateUserProgress } = require("../controllers/updateUserProgress");
const {
  verifyAdmin,
  verifyUser,
  verifyNotLoggedIn,
} = require("./userMiddlewares");

userAuth.get("/", getAllUsers); // add verifyAdmin() to protect the route
userAuth.get("/:id", verifyUser, getOneUser);
userAuth.post("/register", verifyNotLoggedIn, registerUser);
userAuth.post("/login", verifyNotLoggedIn, loginUser);
userAuth.put("/profile/:id", updateUser); //verifyUser() should be added
userAuth.put("/progress/:id", updateUserProgress); //verifyUser() should be added

module.exports = userAuth;
