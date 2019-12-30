import React from "react"
import AttendanceBtns from "./AttendanceBtns"

function StudentList() {
    return (
        <div>
            {/* Display all students tied to this teacher */}
            {/* {this.state.doggosState.map(dbchild => ( */}
            {/* <ChildCard
        onClick={() => this.whenClicked(dbstudent.id)}
        id={dbstudent.id} key={dbstudent.id}
        name={dbstudent.firstname}
        teacher={dbstudent.teacher} 
        /> */}
            {/* ))} */}

            <ul className="list-group-item m-2">
                <li>Student Here: <AttendanceBtns /></li>

            </ul>

        </div>
    )
}
export default StudentList;