import React from "react"
import AttendanceBtns from "./AttendanceBtns"

//pass in student prop from teacherhome.js
function StudentList(student) {
    return (
        <li className="d-flex justify-content-between"><div>{student.firstName} {student.lastName}</div><AttendanceBtns /></li>
    )
}
export default StudentList;