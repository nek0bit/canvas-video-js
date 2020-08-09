import { Button } from "./ui_elements/button.js";
import { ProgressBar } from "./ui_elements/progress_bar.js";

export class Ui {
	constructor(canvas) {
		this.canvas = canvas;
		this.ctx = this.canvas.getContext("2d");
		this.images_locations = ["../data/play.png", "../data/pause.png"];
		this.images = [];

		for (const loc of this.images_locations) {
			const temp = new Image();
			temp.src = loc;
			this.images.push(temp);

		}
	}
	update(image) {
		// const button = new Button(null, this.images[0]);
		// button.update(this.ctx, 50, 50);
		
		const pb = new ProgressBar(image);
		pb.update(this.ctx, 40, 40, 300);
	}
}
