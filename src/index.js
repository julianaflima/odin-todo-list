// This will call all necessary functions
// So it imports everything
// It has the render function to render the page on loading

import "./home/home.css";
import * as home from "./home/home.js";


function render(content, id, classs) {
	const element = document.createElement("div");
	element.id = id;

	element.innerHTML = content;

	if (arguments[2] !== undefined) {
		element.classList.add(arguments[2]);
	}

	return element;
}

(() => {
	document.body.appendChild(render(home.leftSide, "leftSide"));
	document.body.appendChild(render(home.rightSide, "rightSide"));
	const list = new home.ListOfRooms();
	home.displayRight.showAllRooms();
})();

const linksLeftSide = document.querySelector("#leftSide");
linksLeftSide.addEventListener("click", (e) => {
	const whichList = e.target.dataset.value;
	switch (whichList) {
		case "today":
			console.log("Give me my tasks for today!");
			break;
		// Scheduled tasks have reminders
		case "scheduled":
			console.log("Give me all scheduled tasks combined!");
			break;
		// Not all tasks will have a reminder, so they'll show up here
		case "allTasks":
			console.log("Give me all tasks, even if not scheduled!");
			break;
		case "completed":
			console.log("Give me all tasks that have been completed and when!");
			break;
		case "allRooms":
			console.log("Show me initial page!");
			home.displayRight.showAllRooms();
			break;
	}
});

const linksRightSide = document.querySelector("#rightSide");
linksRightSide.addEventListener("click", (e) => {
	const whichRoom = e.target.dataset.value;
	if (whichRoom === "addRoom") {
		const roomName = prompt("Name your room:");
		home.displayRight.addRoom(roomName);
	} else if (whichRoom === "addTask") {
		const task = prompt("Task:");
		home.displayRight.addTask(task);
	} else if (e.target.dataset.value) {
		// console.log(whichRoom);
		home.displayRight.showRoom(e);
	} else {
		return;
	}
});
