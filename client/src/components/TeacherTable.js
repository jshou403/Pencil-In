import React from "react"
import StudentList from "./StudentList"

function TeacherTable(props) {
    return (
        <div className="card">
            <h1>Ms.Frizzle's Class--teacher's ID from DB here</h1>
                <ul className="list-group-item m-2">
                    {props.children}
                </ul>
        </div>
    )
}

export default TeacherTable;