const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/classroom"
);

const studentsSeed = [
    {
        firstname: "Arnold",
        lastname: "Perlstein",
        dob: 12 / 23 / 10,
        gender: "Male",
        grade: 3,
        teacher: "mz-frizz-1",
        parent: "mr_perl",
        present: false
    },
    {
        firstname: "Carlos",
        lastname: "Ramon",
        dob: 10 / 01 / 10,
        gender: "Male",
        grade: 3,
        teacher: "mz-frizz-1",
        // parent: ,
        present: ""
    },
    {
        firstname: "Dorothy",
        lastname: "Rourke",
        dob: 3 / 30 / 11,
        gender: "Female",
        grade: 3,
        teacher: "mz-frizz-1",
        // parent: ,
        present: ""
    },
    {
        firstname: "Jyoti",
        lastname: "Franklin",
        dob: 5 / 11 / 11,
        gender: "Female",
        grade: 3,
        teacher: "mz-frizz-1",
        parent: "maggie_f",
        present: false
    },
    {

        firstname: "Keesha",
        lastname: "Franklin",
        dob: 5 / 11 / 11,
        gender: "Female",
        grade: 3,
        teacher: "mz-frizz-1",
        parent: "maggie_f",
        present: false
    },
    {
        firstname: "Phoebe",
        lastname: "Terese",
        dob: 9 / 25 / 10,
        gender: "Female",
        grade: 3,
        teacher: "mz-frizz-1",
        // parent: ,
        present: ""
    },
    {
        firstname: "Ralph",
        lastname: "Tennelli",
        dob: 2 / 7 / 11,
        gender: "Male",
        grade: 3,
        teacher: "mz-frizz-1",
        // parent: ,
        present: ""
    },
    {
        firstname: "Timothy",
        lastname: "Jamal",
        dob: 2 / 14 / 11,
        gender: "Male",
        grade: 3,
        teacher: "mz-frizz-1",
        // parent: ,
        present: ""
    },
    {
        firstname: "Wanda",
        lastname: "Li",
        dob: 8 / 20 / 10,
        gender: "Female",
        grade: 3,
        teacher: "mz-frizz-1",
        parent: "coolmom",
        present: false
    }
]

db.Student
    .remove({})
    .then(() => db.Student.collection.insertMany(studentsSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });