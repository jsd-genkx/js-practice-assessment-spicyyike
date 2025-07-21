"use strict";
// JS Assessment: Find Your Hat //
import promptSync from "prompt-sync";
import clear from "clear-screen";

const prompt = promptSync({ sigint: true });


const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {

	constructor(field = [[]]) {
		this.field = field;

		// Replace with your own code //
		// Set the home position at (0, 0) before the game starts
		this.positionRow = 0;
		this.positionCol = 0;
		this.gameOver = false
		//for loop 
	}

	static createField(holes,row,column) { //9
	//holes = number of holes 2
	// hat = number of hat 1
	//actor = number of actor 1

	const field = [];
	const len = row*column
	const dimension = new Array(len).fill("░");
	//console.log(dimension)

	for (let i=0; i < holes; i++) {
		const holeIndex = Math.floor(Math.random() * len)
		dimension[holeIndex] = "O"
	}
	
	//place hat
	const hatIndex = Math.floor(Math.random() * len)
	dimension[hatIndex] = "^"

	//place actor

	
	
	for (let i=0; i < row; i++) {
    const r = []
    for (let j=0; j < column; j++) {
        r.push(dimension.pop())
    }
    field.push(r)
}

return field
}

	// Print field //
	print() {
		clear();
		//1. กระดาน
		for (let row of this.field) {
			console.log(row) 
		}

		// Replace with your own code //
		// console.log(this.field); // Please REMOVE this line before you start your code!
	}
	updatePath() {
		 this.field[this.positionRow][this.positionCol] = fieldCharacter;
	}


	move(direction) {
		//console.log(`Moving ${this.positionRow}, ${this.positionCol} to ${direction}`);
		//this.updatePath();
	if (direction === "l") {
		this.moveLeft()
	}
	else if (direction === "r") {
		this.moveRight()
	}
	else if (direction === "u") {
		this.moveUp()
	}
	else if (direction === "d") {
		this.moveDown()
	}
}


	moveLeft() {
		this.positionCol--
		
		
	}

	moveRight() {
		this.positionCol++
		
	}

	moveUp() {
		this.positionRow = this.positionRow - 1
	}

	moveDown() {
		this.positionRow = this.positionRow + 1
		
	}

	checkCondition() {
		//positionRow >= 0 positionCol >= 0
		//console.log(`positionRow: ${positionRow}, positionCol: ${positionCol}`)
	if (this.field.length <= this.positionRow || this.field[0].length <= this.positionCol || this.positionRow < 0 || this.positionCol < 0) {
		this.gameOver = true
		console.log('Loses by attempting to move “outside” the field.')
		return;
	}

	else if (this.field[this.positionRow][this.positionCol] === "O") {
		this.gameOver = true
		console.log("Loses by landing on (and falling in) a hole.")
		return;
	}

	else if (this.field[this.positionRow][this.positionCol] === "^") {
		this.gameOver = true
		console.log('Wins by finding their hat.')
		return;
		
}

}

	update() {
		if (!this.gameOver) {
		this.field[this.positionRow][this.positionCol] = pathCharacter
		}
	}

	createActor() {
		const row = Math.floor(Math.random() *this.field.length);
		const column = Math.floor(Math.random() *this.field[0].length);
		this.positionRow = row;
		this.positionCol = column;
		this.field[this.positionRow][this.positionCol] = pathCharacter;
	}


	runner() {
		this.createActor()
		while (!this.gameOver) {
			this.print()
			const way = prompt("Which way?") // user input: u , way = 'u'
			this.move(way) // move("u")
			this.checkCondition()
			this.update()
		}
	}

}

// Game Mode ON
// Remark: Code example below should be deleted and use your own code.

const newGame = new Field(Field.createField(2,3,3));

newGame.runner()


