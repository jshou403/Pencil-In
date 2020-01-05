import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <a className="navbar-brand text-warning" href="/username">*UserNameHere*</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="/link">Current Link<span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="/parent">Parent Home</a>
                    <a className="nav-item nav-link" href="/teacher">Teacher Home</a>
                    <a className="nav-item nav-link" href="/logout">Log Out</a>
                </div>
            </div>
        </nav>
    )
}

export default Nav;