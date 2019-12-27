import React, { Component } from "react";

import Wrapper from "../components/Wrapper";
import Nav from "../components/Nav";

class ParentHome extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Wrapper>
                    <h1>Hello Parent!</h1>
                </Wrapper>
            </div>
        )
    }
}

export default ParentHome;