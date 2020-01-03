const router = require("express").Router();
const userRoutes = require("./users");
const studentRoutes = require("./students");

router.use("/students", studentRoutes);
router.use("/users", userRoutes);

module.exports = router;