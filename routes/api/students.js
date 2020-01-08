const express = require("express");
const router = express.Router();
const studentsController = require("../../controllers/studentsController");

//route to post updates for attendance status
router.route("/")
.get(studentsController.findAll)

router.route("/:id")
.put(studentsController.update);



module.exports = router; 