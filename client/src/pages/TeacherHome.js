import React, { Component } from 'react';
import Wrapper from '../components/Wrapper';
import Nav from '../components/Nav';
import Calendar from 'short-react-calendar';
import TeacherTable from '../components/TeacherTable';
import StudentList from '../components/StudentList';
import API from '../utils/API';

class TeacherHome extends Component {
    state = {
        date: new Date(),
        students: []
    };

    onChange = (date) => this.setState({ date });

    componentDidMount() {
        this.loadStudents();
    }

    loadStudents = () => {
        API.getStudents()
            .then((res) => {
                console.log(JSON.stringify(res.data))
                this.setState({
                    students: res.data
                })
            })
            .catch((err) => console.log(err));
    };

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
                        {/* Display all students tied to this teacher */}
                        {this.state.students.map((student) => (
                            <StudentList
                                // onClick={() => this.whenClicked(student._id)}
                                id={student._id}
                                key={student._id}
                                firstName={student.firstname}
                                lastName={student.lastname}
                            />
                        ))}
                    </TeacherTable>
                </Wrapper>
            </div>
        );
    }
}

export default TeacherHome;
