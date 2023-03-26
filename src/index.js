// This will call all necessary functions
// So it imports everything
// It has the render function to render the page on loading

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import 'font-awesome-animation/css/font-awesome-animation.min.css'
import "./home/home.css";
import "./all_tasks/all_tasks.css";
import "./completed/completed.css";
import * as home from "./home/home.js";
import { ListOfRooms } from "./room/list_of_rooms.js";
import * as allTasks from "./all_tasks/all_tasks.js";
import { displayCompletedTasks } from "./completed/completed.js"

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
	const list = new ListOfRooms();
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
			allTasks.displayAllTasks.addTask();
			break;
		case "completed":
			displayCompletedTasks.displayTasks();
			break;
		case "allRooms":
			home.displayRight.showAllRooms();
			break;
	}
});

const linksRightSide = document.querySelector("#rightSide");
linksRightSide.addEventListener("click", (e) => {
	const whichRoom = e.target.dataset.value;
	if (whichRoom === "addRoom") {
		// show modal
		roomDialog.showModal();
	} else if (whichRoom === "addTask") {
		taskDialog.showModal()
	} else if (e.target.dataset.value) {
		home.displayRight.showRoom(e);
	} else {
		return;
	}
});


const roomDialog = document.querySelector("#roomDialog");
roomDialog.addEventListener("close", () => {
	const input = document.querySelector("#roomName");
	if(!input.value) return;
	home.displayRight.addRoom(input.value);
});

const taskDialog = document.querySelector("#taskDialog");
taskDialog.addEventListener("close", (e) => {
	const taskName = document.querySelector("#taskName");
	const taskDeadline = document.querySelector("#taskDeadline");
	if(!taskName.value) return;
	home.displayRight.addTask(taskName.value, taskDeadline.value);
});
