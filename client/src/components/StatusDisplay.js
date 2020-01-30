import React, { Component } from "react";

class StatusDisplay extends Component {

    render() {

        // const status = this.props.status;
        const { status } = this.props;
        let icon = null;

        switch (status) {
            case "present":
                icon = <div className="text-success text-center">
                    <img className="img-fluid" src={require("./../utils/images/statusicons/present.png")} alt="Present" />
                    <p className="text-center">PRESENT</p></div>;
                break;

            case "excused":
                icon = <div className="text-warning text-center">
                    <img className="img-fluid" src={require("./../utils/images/statusicons/excused.png")} alt="Excused" />
                    <p className="text-center">EXCUSED</p></div>;
                break;

            case "absent":
                icon = <div className="text-danger text-center">
                    <img className="img-fluid" src={require("./../utils/images/statusicons/absent.png")} alt="Absent" />
                    <p className="text-center">ABSENT</p></div>;
                break;

            default:
                icon = <div className="text-black-50 text-center">
                    <img className="img-fluid" src={require("./../utils/images/statusicons/default.png")} alt="Not Marked Yet" />
                    <p className="text-center">PENDING</p></div>;
                break;
        }

        return (
            <div>
                {icon}
                {/* <p className="text-center">{this.props.status}</p> */}
            </div>
        )
    }

}

export default StatusDisplay;