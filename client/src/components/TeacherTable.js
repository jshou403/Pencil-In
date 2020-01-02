import React from "react"
import StudentList from "./StudentList"

function TeacherTable (){
    return(
       <div className="card">
           <h1>Ms.Frizzle's Class--teacher's ID from DB here</h1>
           <div className="row">
               <ul className="list-group-item m-2">
                  <StudentList />
               </ul>  

           </div>
       </div>
    )
}

export default TeacherTable;