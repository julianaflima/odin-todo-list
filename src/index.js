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

document.body.appendChild(render(home.leftSide, 'leftSide'));

document.body.appendChild(render(home.rightSide, 'rightSide'));