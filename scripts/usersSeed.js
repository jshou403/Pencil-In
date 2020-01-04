const mongoose = require("mongoose");
const db = require("../models");
const bcrypt = require('bcryptjs');

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/classroom"
);

const usersSeed = [
    {
        username: "mz-frizz-1",
        password: bcrypt.hashSync("bestteacher1", 10),
        firstname: "Valerie",
        lastname: "Frizzle",
        teacher: true
    },
    {
        username: "the_ratburn",
        password: bcrypt.hashSync("bestteacher2", 10),
        firstname: "Nigel",
        lastname: "Ratburn",
        teacher: true
    },
    {
        username: "herbie_g",
        password: bcrypt.hashSync("bestteacher3", 10),
        firstname: "Herbert",
        lastname: "Garrison",
        teacher: true
    },
    {
        username: "coolmom",
        password: bcrypt.hashSync("bestparent1", 10),
        firstname: "June",
        lastname: "Li",
        teacher: false
    },
    {
        username: "maggie_f",
        password: bcrypt.hashSync("bestparent2", 10),
        firstname: "Margaret",
        lastname: "Franklin",
        teacher: false
    },
    {
        username: "mr_perl",
        password: bcrypt.hashSync("bestparent3", 10),
        firstname: "Noah",
        lastname: "Perlstein",
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