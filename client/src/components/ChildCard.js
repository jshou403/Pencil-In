import React from "react";

function ChildCard(student) {
    return (

        // student = name of prop being passed in 
        // image, id, name, teacher, grade, onClick = named on ParentHome page

        <div className="card"
            // onClick={() => student.onClick(student.id)}
            >
            <div className="card-body">
                <h4 className="card-text student-card-text">My student's Name: {student.fname} {student.lname}</h4>
                {/* <p>Teacher {student.teacher} - Grade {student.grade}</p> */}
            </div>
        </div>
    )
}

export default ChildCard;