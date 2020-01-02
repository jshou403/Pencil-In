import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import Nav from "../components/Nav";
import Calendar from 'short-react-calendar';
import TeacherTable from "../components/TeacherTable"
import AttendanceBtns from "../components/AttendanceBtns"
import StudentList from "../components/StudentList"
import API from "../utils/API"



class TeacherHome extends Component {
    state = {
        date: new Date(),
    }
    
    onChange = date => this.setState({ date })

    state = {
        students: []
      };
    
      componentDidMount() {
        this.loadStudents();
      }
    
      loadStudents = () => {
        API.getStudents()
          .then(res => this.setState({ students: res.data }))
          .catch(err => console.log(err));
      };

    render() {
        // console.log("")
        return (
            <div>
                <Nav />
                <Wrapper>
                    <Calendar
                        // onChange={this.onChange}
                        // value={value}
                        calendarType="US"
                        oneWeekCalendar={true}
                    />
            
                    <h1>Pencil-In</h1>
                    <TeacherTable>
                        <StudentList>
                               {/* Display all students tied to this teacher */}
            {/* {this.state.students.map(dbchild => ( */}
            {/* <ChildCard
        onClick={() => this.whenClicked(dbstudent.id)}
        id={dbstudent.id} key={dbstudent.id}
        name={dbstudent.firstname}
        teacher={dbstudent.teacher} 
        /> */}
            {/* ))} */}
                        </StudentList>
                    <AttendanceBtns />
                    </TeacherTable>
         

                </Wrapper>
            </div>
        )
    }
}

export default TeacherHome;