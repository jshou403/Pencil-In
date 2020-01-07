import React from "react"

function TeacherTable(props) {
    return (
        <div className="card">
                  {props.children}     
        </div>
    )
}

export default TeacherTable;