import React from "react";

function ChildCard(student) {

    return (

        // student = name of prop being passed in 
        // image, id, name, teacher, grade, onClick = named on ParentHome page

        <div className="card"
        // onClick={() => student.onClick(student.id)}
        >
            <div className="card-body">
                <h4 className="card-text student-card-text">                 {student.firstName} {student.lastName}</h4>

                {student.attendanceStatus}
                
                <p>
                    {/* Teacher {student.teacher} - */}
                    Grade {student.grade}
                </p>
            </div>
        </div>
    )
}

export default ChildCard;