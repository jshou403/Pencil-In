import React from 'react';

//pass in student prop from teacherhome.js
function StudentList(student) {
	return (
		// <div className="row mt-6">
			// <div className="col-3 px-md-5 mt-3">
				<div className="col mt-3">
				{student.firstName} {student.lastName}
			</div>
		// </div>
	);
}
export default StudentList;
