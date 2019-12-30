import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import Nav from "../components/Nav";
import Calendar from 'short-react-calendar';
import TeacherTable from "../components/TeacherTable"
import AttendanceBtns from "../components/AttendanceBtns"



class TeacherHome extends Component {
    state = {
        date: new Date(),
    }
    
    onChange = date => this.setState({ date })
    render() {
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
                    <AttendanceBtns />
                    </TeacherTable>
         

                </Wrapper>
            </div>
        )
    }
}

export default TeacherHome;