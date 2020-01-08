const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema ({
    firstname: {
        type: String, 
        required: true
    },
    lastname: {
        type: String, 
        required: true
    },
    dob: {
        type: Date, 
        required: true
    },
    gender: {
        type: String, 
        required: true
    },
    grade: {
        type: Number,
        required: true
    },
    teacher: {
        type: String, 
        required: true
    },
    parent: {
        type: String, 
        required: true
    },
    present: {
        type: String
    }
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;