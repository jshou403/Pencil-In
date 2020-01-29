import React, {Component} from 'react';
import {Modal, Button, Form, Col, Row} from 'react-bootstrap';


 
export class NoteModal extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<Modal
			{...this.props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		  >
			<Modal.Header closeButton>
			  <Modal.Title id="contained-modal-title-vcenter">
				Add Excused Attendance Note
			  </Modal.Title>
			</Modal.Header>
			<Modal.Body>
			 <div className="container">
				 Form goes here
				 </div>
			</Modal.Body>
			<Modal.Footer>
			  <Button variant="danger" onClick={this.props.onHide}>Close</Button>
			</Modal.Footer>
		  </Modal>
		)
	}
}

export default Modal;