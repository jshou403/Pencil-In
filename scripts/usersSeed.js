const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/classroom"
);

const usersSeed = [
    {
        username: "mz-frizz-1",
        password: "bestteacher1",
        firstname: "Valerie",
        lastname: "Frizzle",
        teacher: true
    },
    {
        username: "the_ratburn",
        password: "bestteacher2",
        firstname: "Nigel",
        lastname: "Ratburn",
        teacher: true
    },
    {
        username: "herbie_g",
        password: "bestteacher3",
        firstname: "Herbert",
        lastname: "Garrison",
        teacher: true
    },
    {
        username: "",
        password: "bestparent1",
        firstname: "",
        lastname: "Frizzle",
        teacher: false
    },
    {
        username: "",
        password: "bestparent2",
        firstname: "Valerie",
        lastname: "Frizzle",
        teacher: false
    },
    {
        username: "",
        password: "bestparent3",
        firstname: "Valerie",
        lastname: "Frizzle",
        teacher: false
    }
]

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(usersSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });