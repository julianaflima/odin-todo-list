import { Task } from "../task/task.js";
import { Room, RoomCard } from "../room/room.js";
import { ListOfRooms } from "../room/list_of_rooms.js";

// Here I write the whole html of the loading/landing page
// Don't forget the `export` statement
// Write everything in strings to be added as innerHtml

const leftSide = `<div data-value="today">Today</div>
<div data-value="scheduled">Scheduled</div>
<div data-value="allTasks">All tasks</div>
<div data-value="completed">Completed</div>
<div data-value="allRooms">All rooms</div>`;

const rightSide = `<div id="right-side-content">
	<h2>Rooms</h2>
	<button data-value="addRoom"> <span>+</span> Add Room</button>
	<div id="card-container">
	</div>
</div>`;

// Define all functions related to the right side of the display
const displayRight = (() => {
	// Add button function
	const addRoom = (roomName) => {
		// create room
		const newRoom = new Room(roomName); // newRoom is an object
		if (newRoom === null) {
			return;
		}

		// Add room to array
		const list = new ListOfRooms();
		list.addRoomToArray(newRoom);

		// Add room to the DOM
		const genericCard = new RoomCard();
		genericCard.addRoomCard(newRoom);
	};

	const addTask = (taskName, deadline, e) => {
		const newTask = new Task(taskName, deadline);
		const roomObject = newTask.getRoomObjectFromRoomId(e.target.dataset.roomid);

		newTask.addTaskToRoom(roomObject);
		newTask.addNewTaskToDisplay(taskName, roomObject);
	};

	// Show room on right side
	const showRoom = (e) => {
		// delete everything
		document.querySelector("#right-side-content").remove();

		// create div to hold content
		const contentDiv = document.createElement("div");
		contentDiv.id = "right-side-content";
		document.querySelector("#rightSide").appendChild(contentDiv);

		// add content to div
		// Upper case room name
		const roomName =
			e.target.dataset.value.charAt(0).toUpperCase() +
			e.target.dataset.value.slice(1);
		contentDiv.innerHTML = `
		<h2 data-value="${e.target.dataset.value}" data-identifier="${e.target.dataset.identifier}">${roomName}</h2>
		<button data-value="addTask" data-roomname="${e.target.dataset.value}" data-roomid="${e.target.dataset.identifier}"> <span>+</span> Add Task</button>
		<div id="task-container"></div>`;

		// Add list of tasks
		const newTask = new Task();
		const roomObject = newTask.getRoomObjectFromRoomId(e.target.dataset.identifier);
		for (const task of roomObject.tasks) {
			newTask.displayIndividualTask(task, roomObject);
		}

		// TODO has to add event listeners to the tasks guess
		newTask.addDeleteButton();
	};

	const showAllRooms = () => {
		//delete right-side-content
		document.querySelector("#right-side-content").remove();
		document.querySelector("#rightSide").innerHTML = rightSide;

		const list = new ListOfRooms();

		for (const room of list.getArray) {
			const genericCard = new RoomCard();
			genericCard.addRoomCard(room);
		}
	};

	return {
		// return all functions defined
		showRoom,
		addTask,
		addRoom,
		showAllRooms,
	};
})();





export { leftSide, rightSide, displayRight };
