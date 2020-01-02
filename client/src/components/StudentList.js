import React from "react"
import AttendanceBtns from "./AttendanceBtns"

function StudentList( {children}) {
    return (
        <li>Student Here: <AttendanceBtns /></li> 
    )
}
export default StudentList;