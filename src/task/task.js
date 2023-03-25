import { ListOfRooms } from "../home/home.js";

class Task {
	getRoomIndex(roomToGetIndex){
		const list = new ListOfRooms();
		console.log(roomToGetIndex);
		console.log(roomToGetIndex.dataset.identifier);

		// find the object with the identifier
		const index = list.getArray.findIndex(
			(room) => room.identifier === +roomToGetIndex.dataset.identifier
		);
		console.log(list.getArray);


		return list.getArray[index]; // return room
	}

	addTaskToRoom(taskName, roomIndex) {
		// const room = this.getRoomIndex(roomToGetIndex);

		const newTaskObject = {
			task: taskName,
			deadline: 'newDeadline'
		}
		roomIndex.tasks.push(newTaskObject);
	}

	displayAllTasks(task, deadline){
		// const room = this.getRoomIndex(roomToGetIndex);

		const taskContainer = document.querySelector("#task-container");
		taskContainer.innerHTML += `<div class="tasks">
				<div>${task}</div> 
				<div class="date">
				<div class="deadline">${deadline}</div>
				<div class="X"></div>
				</div>
			</div>`;
	}

	addNewTaskToDisplay(taskName, roomObject){
		// const room = this.getRoomIndex(roomToGetIndex);

		const taskContainer = document.querySelector("#task-container");
		taskContainer.innerHTML += `<div class="tasks">
				<div>${roomObject.tasks[roomObject.tasks.length - 1].task}</div> 
				<div class="date">
				<div class="deadline">${roomObject.tasks[roomObject.tasks.length - 1].deadline}</div>
				<div class="X"></div>
				</div>
			</div>`;
	}
}


export { Task };