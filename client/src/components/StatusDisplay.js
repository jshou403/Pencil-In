import React, { Component } from "react";

class StatusDisplay extends Component {

    render() {

        const status = this.props.status;
        let icon = null;

        switch (status) {
            case "present":
                icon = <div className="text-success text-center"><h1><i className="fas fa-check-square" /></h1><p className="text-center">PRESENT</p></div>;
                break;

            case "excused":
                icon = <div className="text-success text-center"><h1><i className="fas fa-times" /></h1><p className="text-center">EXCUSED</p></div>;
                break;

            case "absent":
                icon = <div className="text-danger text-center"><h1><i className="fas fa-times" /></h1><p className="text-center">ABSENT</p></div>;
                break;

            default:
                icon = <div className="text-black-50 text-center"><h1><i className="fas fa-question" /></h1></div>;
                break;
        }

        return (
            // <div className="card card-body">
            <div>
                {icon}
                {/* <p className="text-center">{this.props.status}</p> */}
            </div>
        )
    }

}

export default StatusDisplay;