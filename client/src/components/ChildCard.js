import React from "react";

function ChildCard(student) {

    return (

        // student = name of prop being passed in 
        // image, id, name, teacher, grade, onClick = named on ParentHome page

        <div className="col-sm-4 card card bg-light mx-3 mb-3"
        // onClick={() => student.onClick(student.id)}
        >
            <div className="card-body">

                <h4 className="card-text student-card-text">                 {student.firstName} {student.lastName}</h4>
                <p>
                    {/* Teacher {student.teacher} - */}
                    Grade {student.grade}
                </p>

                <div className="card card-body">
                    <h2 className="text-center">
                        {student.attendanceStatus}</h2>
                </div>
                
            </div>

        </div>

    )
}

export default ChildCard;