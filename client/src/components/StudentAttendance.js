import React, { Component } from 'react';
import Button from './Button';

class StudentAttendance extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedOption: 'absent'
		};
	}

	handleOptionChange = (changeEvent) => {
		this.setState({
			selectedOption: changeEvent.target.value
		});
	};

	handleFormSubmit = (formSubmitEvent) => {
		formSubmitEvent.preventDefault();
		console.log('You have submitted:', this.state.selectedOption);
	    
	};

	render() {
		return (
			<div className="col">
				<form onSubmit={this.handleFormSubmit}>
					<div className="row">
						<div className="col-sm-3">
							<label>
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
							<label>
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
							<label>
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
