import React, { Component } from 'react';
// import Button from './Button';
import API from '../utils/API';

class StudentAttendance extends Component {
	state = {
		selectedOption: "",
		disabled: ""
	};
	handleOptionChange = (changeEvent) => {
		this.setState({
			selectedOption: changeEvent.target.value
		});
	};
	//need to add API put to get students from DB
	handleFormSubmit = (formSubmitEvent) => {
		formSubmitEvent.preventDefault();
		console.log('You have submitted:', this.state.selectedOption);

		if (!this.state.selectedOption) {
			return;
		} else {
			this.setState({
				disabled: "true"
			})
			API.updateAttendance(this.props.student._id, { present: this.state.selectedOption });
		}
	};

	render() {
		return (
			<div className="col d-flex justify-content-end" >
				{/* <div className="col " > */}
				<form onSubmit={this.handleFormSubmit}>
					<div className="row mt-3">
						<div className="col-sm-3">
							<label className="text-danger">
								<input
									type="checkbox"
									value="absent"
									checked={this.state.selectedOption === 'absent'}
									onChange={this.handleOptionChange}
									disabled={this.state.disabled}
								/>
								Absent
							</label>
						</div>
						<div className="col-sm-3">
							<label className="text-warning">
								<input
									type="checkbox"
									value="excused"
									checked={this.state.selectedOption === 'excused'}
									onChange={this.handleOptionChange}
									disabled={this.state.disabled}
								/>
								Excused
							</label>
						</div>
						<div className="col-sm-3">
							<label className="text-success">
								<input
									type="checkbox"
									value="present"
									checked={this.state.selectedOption === 'present'}
									onChange={this.handleOptionChange}
									disabled={this.state.disabled}
								/>
								Present
							</label>
						</div>
						<div className="col-sm-3">
							{/* <Button onSubmit={this.handleFormSubmit} /> */}

							<div className="form-group">
								<button type="submit" className="btn btn-sm btn-dark" onSubmit={this.handleFormSubmit} disabled={this.state.disabled}>
									<i className="fas fa-user-check" />
								</button>
							</div>

						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default StudentAttendance;
