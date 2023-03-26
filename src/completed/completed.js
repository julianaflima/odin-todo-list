class CompletedTasks {
	constructor(roomId, roomName, taskName, taskId, deadline) {
		this.roomName = roomName;
		this.roomId = roomId;
		this.taskName = taskName;
		this.taskId = taskId;
		this.deadline = deadline
	}

	static #array = [
		{
			roomName: 'Kitchen',
			roomId: 0,
			taskName: 'mop',
			taskId: 4,
			deadline: 'Saturday'
		}
	];

	addTaskToCompleted(task) {
		CompletedTasks.#array.push(task);
	}

	//TODO remove task from completed

	get getArray() {
		return CompletedTasks.#array;
	}
}

const displayCompletedTasks = (() => {
	const displayTasks = () => {
		// delete content from right side
		document.querySelector("#right-side-content").remove();

		// create div to hold content
		const contentDiv = document.createElement("div");
		contentDiv.id = "right-side-content";
		document.querySelector("#rightSide").appendChild(contentDiv);

		// add title
		contentDiv.innerHTML = `<h2 id="completed-title">Completed tasks</h2>
		<div id="task-container"></div>`

		// add each task from the completed tasks array
		const taskContainer = document.querySelector("#task-container");
		const genericTask = new CompletedTasks();
		genericTask.getArray.forEach( (task) =>
		{
			taskContainer.innerHTML += `<div class="tasks" data-taskid="${task.taskID}">
				<div data-taskid="${task.taskID}" data-roomid="${task.roomId}" data-roomname=${task.roomName}><i class="fa-solid fa-rotate faa-spin animated-hover"></i></div>
				<div class="task-main">
					<div>${task.taskName}</div> 
					<div class="deadline"> ${task.roomName} - ${task.deadline}</div>
				</div>
				<div data-taskid="${task.taskID}" data-roomid="${task.roomId}" data-roomname=${task.roomName}><i class="fa-regular fa-trash-can fa-lg faa-shake faa-fast animated-hover X"></i></div>
				</div>
			</div>`;
			console.log(task)
		});



		// add delete button
		// genericTask.addDeleteButton();
	};

	const displayIndividualTask = (task, roomObject) => {
		const taskContainer = document.querySelector("#task-container");
		taskContainer.innerHTML += `<div class="tasks" data-taskid="${task.taskID}">
				<input type="radio" name="status" id="status" value= "yes" class="complete">
				<div class="task-main">
					<div>${task.task}</div> 
					<div class="deadline">${task.deadline}</div>
				</div>
				<div class="X" data-taskid="${task.taskID}" data-roomid="${roomObject.identifier}" data-roomname=${roomObject.name}></div>
				</div>
			</div>`;
	};

	return {
		// all all functions that should be available outside
		displayTasks,
	};
})();

export { displayCompletedTasks }