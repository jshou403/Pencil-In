import React from 'react';
import Modal from './Modal';
<<<<<<< HEAD

=======
// import Modal from 'react-awesome-modal';
import StatusDisplay from './StatusDisplay';
>>>>>>> 469665173ef7ab45924a994497c12dbec4923e57

function ChildCard(student) {
	return (
		// student = name of prop being passed in
		// image, id, name, teacher, grade, onClick = named on ParentHome page

		<div className="col-sm-10 col-md-6 col-lg-4 card card bg-light mx-3 mb-3">
			{/* {() => student.onClick(student.id)} */}
			<div className="card-body">
				<h4 className="card-text student-card-text text-success">
					{student.firstName} {student.lastName}
				</h4>
				<p>
					{/* Teacher {student.teacher} - */}
					Grade {student.grade}
				</p>

				{/* <div className="card card-body">
					<h2 className="text-center">{student.attendanceStatus}</h2>
				</div> */}

				<StatusDisplay status={student.attendanceStatus} />

				<Modal />
			</div>
		</div>
	);
}

export default ChildCard;
