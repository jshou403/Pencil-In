const express = require("express");
const router = express.Router();
// const router = require("express").Router();
// const studentsController = require("../../controllers/studentsController");
const axios = require("axios");
// const db = require("../models");
const db = require("../../models");

// const router = require("express").Router();
// const studentsController = require("../../controllers/studentsController");
// const db = require("../models");
// CODE BELOW REQUIRES ABOVE CONSTS
// Matches with "/api/students"
// router.route("/")
//   .get(studentsController.findAll)
// .post(studentsController.create);

router.get("/", function (req, res) {
  db.Student
    .find(req.query)
    .then(dbStudent => res.json(dbStudent))
    .catch(err => res.status(422).json(err));
})

module.exports = router; 