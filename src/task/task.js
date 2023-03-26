import { ListOfRooms } from "../room/list_of_rooms.js";

class Task {
	constructor(taskName, deadline) {
		this.task = taskName;
		this.deadline = deadline;
		this.taskID = "";
	}

	getRoomObject(element) {
		const list = new ListOfRooms();

		// find the object with the identifier
		const index = list.getArray.findIndex(
			(room) => room.identifier === +element.dataset.identifier
		);
		console.log(list.getArray);

		return list.getArray[index]; // return room Object
	}

	getTaskObject(taskId, currentRoomObject) {
		console.log(currentRoomObject.tasks);

		const index = currentRoomObject.tasks.findIndex(
			(task) => task.taskID === +taskId
		);
		console.log(index);

		return currentRoomObject.tasks[index]; // return task object
	}

	addTaskToRoom(roomObject) {
		this.taskID = roomObject.taskID++;
		roomObject.tasks.push(this);
	}

	displayAllTasks(task) {
		const taskContainer = document.querySelector("#task-container");
		taskContainer.innerHTML += `<div class="tasks" data-taskid="${task.taskID}">
				<div>${task.task}</div> 
				<div class="date">
				<div class="deadline">${task.deadline}</div>
				<div class="X" data-taskId="${task.taskID}"></div>
				</div>
			</div>`;
	}

	addNewTaskToDisplay(taskName, roomObject) {
		// const room = this.getRoomIndex(roomToGetIndex);

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
		const supportingTask = new Task();
		const currentRoomObject = supportingTask.getRoomObject(
			document.querySelector("#right-side-content>h2")
		);

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
