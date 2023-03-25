class Room {
	constructor(roomName) {
		this.name = roomName;
		this.identifier = Room.#counter++;
		this.tasks = [];
	}

	static #counter = 4;

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

export{ Room, RoomCard}