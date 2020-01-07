import React from "react"
import StudentAttendance from "./StudentAttendance"


//pass in student prop from teacherhome.js
function StudentList(student) {
    return (
        <li className="d-flex justify-content-start"><div>{student.firstName} {student.lastName}</div><StudentAttendance /></li>
    )
}
export default StudentList;