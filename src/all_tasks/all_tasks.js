import { ListOfRooms } from "../room/list_of_rooms.js";
import { Task } from "../task/task.js"

const displayAllTasks = (() => {
	const addTask = () => {
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

		// add each task of each room to the task-container
		const genericTask = new Task();
		list.getArray.forEach( (room) =>
		{
			room.tasks.forEach( (roomTask) => {
				genericTask.displayIndividualTask(roomTask, room);
			});
		});

		// add delete button
		genericTask.addDeleteButton();
	};

	return {
		// all all functions that should be available outside
		addTask,
	};
})();

export { displayAllTasks };
