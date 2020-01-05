import React from "react";
import Wrapper from "../components/Wrapper";
import Nav from "../components/Nav";

function NoMatch() {

    return (
        <div>
            <Nav />
            <Wrapper>
                <div>
                    <h3>Error: This page does not exist.</h3>
                    <p><a href="/">Go Home</a></p>
                </div>
            </Wrapper>
        </div>
    )

}

export default NoMatch;