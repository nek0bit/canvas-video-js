import { Button } from "./ui_elements/button.js";

export class Ui {
	constructor(canvas) {
		this.canvas = canvas;
		this.ctx = canvas.getContext("2d");
	}
	update() {
		const button = new Button("This is a button");
	}
}
