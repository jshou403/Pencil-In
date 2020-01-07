import React from "react"
import StudentAttendance from "./StudentAttendance"


//pass in student prop from teacherhome.js
function StudentList(student) {
    return (
        <div className="row">
             <div className="col">{student.firstName} {student.lastName}</div>
             <StudentAttendance />
        </div>
    )
}
export default StudentList;