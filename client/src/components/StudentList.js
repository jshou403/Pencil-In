import React from 'react';

//pass in student prop from teacherhome.js
function StudentList(student) {
	return (
		<div className="col mt-3">
			{student.firstName} {student.lastName}
		</div>
	);
}
export default StudentList;
