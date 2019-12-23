const router = require("express").Router();
const userRoutes = require("./users");
const studentRouters = require("./students");

router.use("/students", studentRouters);
router.use("/users", userRoutes);

module.exports = router;