import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import Nav from "../components/Nav";
import Calendar from 'short-react-calendar';



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
                    <h1>Hello Teacher!</h1>

                </Wrapper>
            </div>
        )
    }
}

export default TeacherHome;