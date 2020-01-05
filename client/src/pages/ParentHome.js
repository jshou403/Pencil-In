import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import Nav from "../components/Nav";
import ChildCard from "../components/ChildCard";
import Calendar from 'short-react-calendar';
import API from "../utils/API";

class ParentHome extends Component {
    state = {
        date: new Date(),
        userID: "",
        students: []
    }

    componentDidMount() {
        // this.loadUsername();
        this.loadStudents();
    }

    onChange = date => this.setState({ date })

    loadStudents = () => {
        console.log("PARENT HOME LOADED\nGetting students...");
        API.getStudents()
            .then(res => {
                console.log("--- Students Response Start ---")
                console.log(JSON.stringify(res.data))
                console.log("--- End Students Response ---")
                this.setState({ students: res.data })
            })
    }

    render() {

        // console.log(`this.state.students = ${this.state.students}`)

        return (
            <div>
                <Nav />
                <Wrapper>

                    <h1>Hello Parent!</h1>

                    <Calendar
                        // onChange={this.onChange}
                        // value={value}
                        calendarType="US"
                        oneWeekCalendar={true}
                    />

                    <div className="row">

                        {/* Display all students tied to this parent */}
                        {this.state.students.map(student => (
                            <ChildCard
                                // onClick={() => this.whenClicked(student.id)}
                                id={student._id}
                                key={student._id}
                                firstName={student.firstname}
                                lastName={student.lastname}
                                attendanceStatus={student.present}
                                grade={student.grade}
                                // teacher={student.teacher}
                            />
                        ))}

                    </div>

                </Wrapper>
            </div>
        )
    }
}

export default ParentHome;
