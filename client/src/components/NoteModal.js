import React from 'react';

function NoteModal() {
	return (
		<div>
			<button type="button" class="btn btn-success btn-sm">
				<i class="fas fa-plus" />
				Add Note
			</button>
			{/* <div class="custom-file">
				<input type="file" class="custom-file-input" id="customFile" />
				<label class="custom-file-label" for="customFile">
					Choose file
				</label>
			</div> */}
		</div>
	);
}

export default NoteModal;
