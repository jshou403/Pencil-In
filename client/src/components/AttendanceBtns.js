import React from 'react';

function AttendanceBtns() {
	return (
        <div>
        <p>Buttons Here</p>
		<div className="btn-group btn-group-toggle" data-toggle="buttons">
			<label className="btn btn-secondary active">
				<input type="button" name="options" id="option1" checked /> Present
			</label>
			<label className="btn btn-secondary">
				<input type="button" name="options" id="option2" /> Absent
			</label>
			<label className="btn btn-secondary">
				<input type="button" name="options" id="option3" /> Excused
			</label>
		</div>
        </div>
	);
}

export default AttendanceBtns;
