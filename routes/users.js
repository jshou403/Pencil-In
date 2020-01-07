const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("./passport");
const usersController = require("../controllers/usersController");

//FOR CREATING NEW USERS
router.post("/", (req, res) => {
  console.log("user signup");

  const { username, password } = req.body;
  // ADD VALIDATION
  User.findOne({ username: username }, (err, user) => {
    if (err) {
      console.log("User.js post error: ", err);
    } else if (user) {
      res.json({
        error: `Sorry, already a user with the username: ${username}`
      });
    } else {
      const newUser = new User({
        username: username,
        password: password
      });
      newUser.save((err, savedUser) => {
        if (err) return res.json(err);
        res.json(savedUser);
      });
    }
  });
});

// FOR LOGGING IN AS AN EXISTING USER
router.post(
  "/login",
  function(req, res, next) {
    console.log("routes/user.js, login, req.body: ");
    console.log(req.body);
    next();
  },
  passport.authenticate("local"),
  function(req, res) {
    console.log("logged in", req.user);
    var userInfo = {
      username: req.user.username,
      firstName: req.user.firstname,
      lastName: req.user.lastname,
      userType: req.user.teacher
    };
    res.send(userInfo);
    console.log(userInfo);
  }
);

router.route("/").get(usersController.findUser);

router.get("/logout", (req, res) => {
  console.log("logout");
  if (req.user) {
    console.log(req.user);
    req.logout();
    req.session.destroy(function(err) {
      if (err) {
        return next(err);
      }
      // The response should indicate that the user is no longer authenticated.
      return res.send({ authenticated: req.isAuthenticated() });
    });
  }
});

module.exports = router;
