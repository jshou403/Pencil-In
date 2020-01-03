const router = require("express").Router();
const studentsController = require("../../controllers/studentsController");

// Matches with "/api/students"
router.route("/api/students")
  .get(studentsController.findAll)
  // .post(studentsController.create);

module.exports = router; 