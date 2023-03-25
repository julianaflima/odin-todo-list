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

	const addTask = (task) => {
		// Ass task to object
		const list = new ListOfRooms();
		const hTwo = document.querySelector("#right-side-content h2:first-child");

		// find the object with the identifier
		const index = list.getArray.findIndex(
			(room) => room.identifier === +hTwo.dataset.identifier
		);
		const room = list.getArray[index];
		room.task = task;
		console.log(list.getArray);

		// Add task to display
		const taskContainer = document.querySelector("#task-container");
		taskContainer.innerHTML += `<div class="tasks">${task}</div>`;
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
		<button data-value="addTask"> <span>+</span> Add Task</button>
		<div id="task-container"></div>`;

		// TODO add list of tasks
		const list = new ListOfRooms();
		console.log(list.getArray);
		const index = list.getArray.findIndex(
			(room) => room.identifier === +e.target.dataset.identifier
		);
		const room = list.getArray[index];
		console.log(room);
		const taskContainer = document.querySelector("#task-container");
		for (const task of room.tasks) {
			taskContainer.innerHTML += `<div class="tasks">
				<div>${task.task}</div> 
				<div class="date">
				<div class="deadline">${task.deadline}</div>
				<div class="X"></div>
				</div>
			</div>`;
		}

		// TODO has to add event listeners to the tasks guess
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

class ListOfRooms {
	static #array = [
		{
			name: "kitchen",
			identifier: 0,
			tasks: [
				{
					task: "clean stove",
					deadline: "Tuesday",
				},
				{
					task: "mop",
					deadline: "Friday",
				},
				{
					task: "sweep",
					deadline: "Thursday",
				},
				{
					task: "clean fridge",
					deadline: "Sunday",
				},
			],
		},
		{
			name: "bathroom",
			identifier: 1,
			tasks: [
				{
					task: "clean mirror",
					deadline: "Tuesday",
				},
				{
					task: "clean toilet",
					deadline: "Friday",
				},
				{
					task: "change towels",
					deadline: "Thursday",
				},
			],
		},
		{
			name: "bedroom",
			identifier: 2,
			tasks: [
			{
					task: "change sheets",
					deadline: "Tuesday",
				},
				{
					task: "clean mirror",
					deadline: "Friday",
				},
				{
					task: "mop",
					deadline: "Thursday",
				},
				{
					task: "organize closet",
					deadline: "Sunday",
				},
			],
		},
		{
			name: "office",
			identifier: 3,
			tasks: [
			{
					task: "mop",
					deadline: "Thursday",
				},
				{
					task: "clean desk",
					deadline: "Sunday",
				},
			],
		},
	];

	addRoomToArray(newRoom) {
		ListOfRooms.#array.push(newRoom);
	}

	get getArray() {
		return ListOfRooms.#array;
	}
}

class Room {
	constructor(roomName) {
		this.name = roomName;
		this.identifier = Room.#counter++;
		this.tasks = [];
	}

	static #counter = 0;

	// TODO: Remove room from array
}

// Add to the DOM -- no, this should be CREATE, MODIFY
class RoomCard {
	addRoomCard(newRoom) {
		const newCard = document.createElement("div");
		newCard.classList.add("cards");
		newCard.setAttribute("data-value", newRoom.name);
		newCard.setAttribute("data-identifier", newRoom.identifier);
		newCard.textContent = this.#capitalizeFirstLetter(newRoom.name);

		document.querySelector("#card-container").appendChild(newCard);
	}

	#capitalizeFirstLetter(string) {
		if (typeof string === "string") {
			const capitalized = string.charAt(0).toUpperCase() + string.slice(1);
			return capitalized;
		} else {
			return string;
		}
	}
}

export { leftSide, rightSide, displayRight, ListOfRooms };
