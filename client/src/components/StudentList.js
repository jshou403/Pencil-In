import React from 'react';

//pass in student prop from teacherhome.js
function StudentList(student) {
	return (
		<div className="row">
			<div className="col px-md-5 mt-3">
				{student.firstName} {student.lastName}
			</div>
		</div>
	);
}
export default StudentList;
