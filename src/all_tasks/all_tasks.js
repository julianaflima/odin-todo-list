import { ListOfRooms } from "../room/list_of_rooms.js";

const displayAllTasks = (() => {
	const addTask = () => {
		console.log("yay working");

		// delete everything
		document.querySelector("#right-side-content").remove();

		// create div to hold content
		const contentDiv = document.createElement("div");
		contentDiv.id = "right-side-content";
		document.querySelector("#rightSide").appendChild(contentDiv);

		// add content to the div
		contentDiv.innerHTML = `<h2>All tasks</h2>
		<div id="task-container"></div>`

		// get list of all rooms and their tasks
		const list = new ListOfRooms;
		console.log(list.getArray);

		const taskContainer = document.querySelector("#task-container");
		list.getArray.forEach( (room, index) =>
		{
			room.tasks.forEach( (roomTask, index1) => {
				taskContainer.innerHTML += `<div class="all-tasks" data-taskid="${roomTask.taskID}">
				<div>${roomTask.task}</div> 
				<div class="date">
				<div class="deadline">${roomTask.deadline}</div>
				<div class="X" data-taskId="${roomTask.taskID}"></div>
				</div>
			</div>`;
			});
		});

	};

	return {
		// all all functions that should be available outside
		addTask,
	};
})();

export { displayAllTasks };
