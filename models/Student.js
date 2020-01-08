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
    // teacher is an object that stores the teacher ID
    // the ref property links the ObjectID to the User model
    // unit 18, activity 20
    teacher: {
        type: Schema.Types.ObjectId, 
        ref: "User"
    },
    parent: {
        type: Schema.Types.ObjectId, 
        ref: "User"
    },
    present: {
        type: String
    }
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
