import React, { Component } from "react";

import Wrapper from "../components/Wrapper";
import Nav from "../components/Nav";

class TeacherHome extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Wrapper>
                    <h1>Hello Teacher!</h1>
                </Wrapper>
            </div>
        )
    }
}

export default TeacherHome;