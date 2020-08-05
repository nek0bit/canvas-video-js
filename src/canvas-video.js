import { Input } from './input.js';

export class CanvasVideo {
	constructor(canvas, video_element) {
		this.canvas = canvas;
		this.ctx = canvas.getContext("2d");
		this.video_element = video_element;
		this.input = new Input();
	}
	init() {
		const that = this;

		// Draw black screen for init
		this.ctx.fillStyle = "#000000";
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

		// Play
		this.video_element.addEventListener('play', function() {
			that.video_update(this, null);
		}, 0);

		// Keypress
		this.canvas.addEventListener('keydown', function(e) {
			if (that.input.get_key_pressed(e, "play_pause_toggle")) {
				that.toggle_play();
			} else if (that.input.get_key_pressed(e, "seek_left")) {
				that.video_element.currentTime -= 3;
			} else if (that.input.get_key_pressed(e, "seek_right")) {
				that.video_element.currentTime += 3;
			}
		});
	}
	play() {
		this.video_element.play();
	}
	toggle_play() {
		if (this.video_element.paused == true) {
			console.log("Resuming Playback...");
			this.video_element.play();
		} else {
			console.log("Pausing...");
			this.video_element.pause();
		}
	}
	video_update(video, ref) {
		if (ref == null) {
			ref = this;
		}
		const fps = 60;
		ref.ctx.drawImage(video, 0, 0, ref.canvas.width, ref.canvas.height);
		
		setTimeout(ref.video_update, 1000 / fps, video, ref);
	}
}
