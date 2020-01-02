import React from "react"
import StudentList from "./StudentList"

function TeacherTable (students){
    return(
       <div className="card">
           <h1>Ms.Frizzle's Class--teacher's ID from DB here</h1>
           <div className="row">
               <ul className="list-group-item m-2">
                  <li>Student Here: <StudentList /></li>
                  
               </ul>  

           </div>
       </div>
    )
}

export default TeacherTable;