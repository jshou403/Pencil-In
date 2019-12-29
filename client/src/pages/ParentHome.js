import React, { Component } from "react";

import Wrapper from "../components/Wrapper";
import Nav from "../components/Nav";
import ChildCard from "../components/ChildCard";
import Calendar from 'short-react-calendar';

class ParentHome extends Component {

    state = {
        date: new Date(),
    }

    onChange = date => this.setState({ date })

    render() {
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

                        {/* Display all children tied to this parent */}
                        {/* {this.state.doggosState.map(dbchild => ( */}
                        {/* <ChildCard
                                onClick={() => this.whenClicked(dbchild.id)}
                                image={dbchild.imageUrl}
                                id={dbchild.id} key={dbchild.id}
                                name={dbchild.name}
                                teacher={dbchild.teacher} 
                                /> */}
                        {/* ))} */}

                        {/* Temporary Display */}
                        <ChildCard /><ChildCard /><ChildCard />

                    </div>

                </Wrapper>
            </div>
        )
    }
}

export default ParentHome;