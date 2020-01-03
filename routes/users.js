const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("./passport");

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

router.post(
  "/login",
  function(req, res, next) {
    console.log("routes/user.js, login, req.body: ");
    console.log(req.body);
    next()
  },
  passport.authenticate("local"),
//   , function (err, user, info) {
//         console.log("error");
//         console.log(err);
//         console.log("user")
//         console.log(user);
//         console.log("info")
//         console.log(info);

//         if (err) {
//             res.status(401).send(err);
//         } else if(!user) {
//             res.status(401).send(info);
//         } else {
//             next();
//         }
//     })(req, res)
//     },
function(req, res) {
        console.log("logged in", req.user);
        var userInfo = {
        username: req.user.username
        };
        res.send(userInfo);
        console.log(userInfo);
    }
);

router.get("/", (req, res, next) => {
  console.log("===== user!!======");
  if (req.user) {
    console.log(req.user);
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
  }
});

router.post("/logout", (req, res) => {
  if (req.user) {
    req.logout();
    res.send({ msg: "logging out" });
  } else {
    res.send({ msg: "no user to log out" });
  }
});

module.exports = router;
