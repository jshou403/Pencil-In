import React, { Component } from 'react';
import Button from './Button';
import API from '../utils/API';

class StudentAttendance extends Component {
	state = {
		selectedOption: 'absent'
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
		API.updateAttendance(this.props.student._id, { present: this.state.selectedOption });
	};

	render() {
		return (
			<div className="col">
				<form onSubmit={this.handleFormSubmit}>
					<div className="row mt-3">
						<div className="col-sm-3">
							<label className="text-danger">
								<input
									type="radio"
									value="absent"
									checked={this.state.selectedOption === 'absent'}
									onChange={this.handleOptionChange}
								/>
								Absent
							</label>
						</div>
						<div className="col-sm-3">
							<label className="text-warning">
								<input
									type="radio"
									value="excused"
									checked={this.state.selectedOption === 'excused'}
									onChange={this.handleOptionChange}
								/>
								Excused
							</label>
						</div>
						<div className="col-sm-3">
							<label className="text-success">
								<input
									type="radio"
									value="present"
									checked={this.state.selectedOption === 'present'}
									onChange={this.handleOptionChange}
								/>
								Present
							</label>
						</div>
						<div className="col-sm-3">
							<Button onSubmit={this.handleFormSubmit} />
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default StudentAttendance;
