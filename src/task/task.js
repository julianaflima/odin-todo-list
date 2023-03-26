import { ListOfRooms } from "../room/list_of_rooms.js";

class Task {
	constructor(taskName, deadline) {
		this.task = taskName;
		this.deadline = deadline;
		this.taskID = "";
	}

	getRoomObjectFromRoomId(roomID) {
		const list = new ListOfRooms();

		// find the object with the identifier of the card clicked on
		const index = list.getArray.findIndex(
			(room) => room.identifier === +roomID
		);

		return list.getArray[index]; // return room Object
	}

	getTaskObject(taskId, currentRoomObject) {
		const index = currentRoomObject.tasks.findIndex(
			(task) => task.taskID === +taskId
		);
		return currentRoomObject.tasks[index]; // return task object
	}

	addTaskToRoom(roomObject) {
		this.taskID = roomObject.taskID++;
		roomObject.tasks.push(this);
	}

	displayIndividualTask(task, roomObject) {
		const taskContainer = document.querySelector("#task-container");
		taskContainer.innerHTML += `<div class="tasks" data-taskid="${task.taskID}">
				<div>${task.task}</div> 
				<div class="date">
				<div class="deadline">${task.deadline}</div>
				<div class="X" data-taskid="${task.taskID}" data-roomid="${roomObject.identifier}" data-roomname=${roomObject.name}></div>
				</div>
			</div>`;
	}

	// TODO Update this to use displayAllTasks
	addNewTaskToDisplay(taskName, roomObject) {
		const taskContainer = document.querySelector("#task-container");
		taskContainer.innerHTML += `<div class="tasks">
				<div>${roomObject.tasks[roomObject.tasks.length - 1].task}</div> 
				<div class="date">
				<div class="deadline">${
					roomObject.tasks[roomObject.tasks.length - 1].deadline
				}</div>
				<div class="X"></div>
				</div>
			</div>`;

		this.addDeleteButton();
	}

	addDeleteButton() {
		const classX = document.querySelectorAll(".X");
		classX.forEach((button) =>
			button.removeEventListener("click", this.#deleteTask)
		);

		classX.forEach((button) =>
			button.addEventListener("click", this.#deleteTask)
		);
	}

	#deleteTask(e) {
		const taskId = e.target.dataset.taskid;

		// Find room object that the task belongs to
		const genericTask = new Task();
		const currentRoomObject = genericTask.getRoomObjectFromRoomId(e.target.dataset.roomid);

		// Find task object index
		const index = currentRoomObject.tasks.findIndex(
			(task) => task.taskID === +taskId
		);

		// Delete task object with the index found
		currentRoomObject.tasks.splice(index, 1);

		// Update tasks on display
		document
			.querySelector(`#task-container [data-taskid="${taskId}"]`)
			.remove();
	}
}

export { Task };
