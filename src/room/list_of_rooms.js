class ListOfRooms {
	static #array = [
		{
			name: "kitchen",
			identifier: 0,
			taskID: 3,

			tasks: [
				{
					task: "clean stove",
					deadline: "Tuesday",
					taskID: 0,
				},
				{
					task: "mop",
					deadline: "Friday",
					taskID: 1,
				},
				{
					task: "sweep",
					deadline: "Thursday",
					taskID: 2,
				},
				{
					task: "clean fridge",
					deadline: "Sunday",
					taskID: 3,
				},
			],
		},
		{
			name: "bathroom",
			identifier: 1,
			taskID: 2,			
			tasks: [
				{
					task: "clean mirror",
					deadline: "Tuesday",
					taskID: 0,
				},
				{
					task: "clean toilet",
					deadline: "Friday",
					taskID: 1,
				},
				{
					task: "change towels",
					deadline: "Thursday",
					taskID: 2,
				},
			],
		},
		{
			name: "bedroom",
			identifier: 2,
			taskID: 3,
			tasks: [
			{
					task: "change sheets",
					deadline: "Tuesday",
					taskID: 0,
				},
				{
					task: "clean mirror",
					deadline: "Friday",
					taskID: 1,
				},
				{
					task: "mop",
					deadline: "Thursday",
					taskID: 2,
				},
				{
					task: "organize closet",
					deadline: "Sunday",
					taskID: 3,
				},
			],
		},
		{
			name: "office",
			identifier: 3,
			taskID: 1,
			tasks: [
			{
					task: "mop",
					deadline: "Thursday",
					taskID: 0,
				},
				{
					task: "clean desk",
					deadline: "Sunday",
					taskID: 1,
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

export { ListOfRooms }