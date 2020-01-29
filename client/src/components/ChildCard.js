import React, { Component } from 'react';
import StatusDisplay from './StatusDisplay';
import Modal from 'react-awesome-modal';

class ChildCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false
		};
	}

	openModal() {
		this.setState({
			visible: true
		});
	}

	closeModal() {
		this.setState({
			visible: false
		});
	}

	render() {
		return (
			// student = name of prop being passed in
			// image, id, name, teacher, grade, onClick = named on ParentHome page

			<div className="col-sm-10 col-md-6 col-lg-4 card card bg-light mx-3 mb-3">
				{/* {() => student.onClick(student.id)} */}
				<div className="card-body">
					<h4 className="card-text student-card-text text-success">
						{this.props.firstName} {this.props.lastName}
					</h4>
					<p>
						{/* Teacher {this.props.teacher} - */}
						Grade {this.props.grade}
					</p>

					{/* <div className="card card-body">
					<h2 className="text-center">{this.this.props.attendanceStatus}</h2>
				</div> */}

					<StatusDisplay status={this.props.attendanceStatus} />
					<button
						type="button"
						className="btn btn-success btn-sm mt-3"
						value="Open"
						onClick={() => this.openModal()}
					>
						<i className="fas fa-plus" />
						Add Note
					</button>

					<section>
						<Modal visible={this.state.visible} effect="fadeInUp" onClickAway={() => this.closeModal()}>
							<div className="card bg-light">
								<div className="card-header">
									Note for {this.props.firstName} {this.props.lastName}
								</div>
								<div className="card-body">
									<h5 className="card-title" />

									<form>
										<div className="form-group">
											<input
												className="form-control form-control-sm"
												type="text"
												placeholder="Date"
											/>
                                            <br />
											<input
												className="form-control form-control-sm"
												type="text"
												placeholder="Subject"
											/>

											<label for="exampleFormControlTextarea1" />
											<textarea
												className="form-control"
												id="exampleFormControlTextarea1"
												rows="3"
												placeholder="Note"
											/>
										</div>

										<div className="d-flex justify-content-center">
											<label for="exampleFormControlFile1" />
											<input
												type="file"
												className="form-control-file"
												id="exampleFormControlFile1"
											/>
											<br />
											<input className="btn-success" type="submit" value="Submit" />
										</div>
									</form>
								</div>
							</div>
						</Modal>
					</section>
				</div>
			</div>
		);
	}
}

export default ChildCard;
