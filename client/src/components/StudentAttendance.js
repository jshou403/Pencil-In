import React, { Component } from 'react';
import Button from "./Button";


class StudentAttendance extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedOption: "absent"
		};
	}

	handleOptionChange = changeEvent => {
		this.setState({
			selectedOption: changeEvent.target.value
		});
	}

	handleFormSubmit = formSubmitEvent => {
		formSubmitEvent.preventDefault();

		console.log("You have submitted:", this.state.selectedOption)
	};

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<form onSubmit={this.handleFormSubmit} className="d-flex justify-content-end">
							<div className="form-check">
								<label className="d-flex justify-content-end">
									<input type="radio" name="react-tips" value="absent" checked={this.state.selectedOption === "absent"} onChange={this.handleOptionChange} className="form-check-input" />
								</label>
								Absent
							</div>
							<div className="form-check">
								<label className="d-flex justify-content-end ">
									<input type="radio" name="react-tips" value="excused" checked={this.state.selectedOption === "excused"} onChange={this.handleOptionChange}className="form-check-input" />
									{/* Excused */}
								</label>
								Excused
							</div>
							<div className="form-check">
								<label className="d-flex justify-content-end">
									<input type="radio" name="react-tips" value="present" checked={this.state.selectedOption === "present"} onChange={this.handleOptionChange}className="form-check-input" />
									{/* Present */}
								</label>
								Present
							</div>
							<div className="form-group">
            					<Button onSubmit={this.handleFormSubmit}></Button>
            				</div>
						</form>
					</div>
				</div>
			</div>
			

		)
	}
}





export default StudentAttendance;
