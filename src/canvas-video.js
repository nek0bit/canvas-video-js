import { Input } from './input.js';
import { Ui } from './ui.js';

export class CanvasVideo {
	constructor(canvas, video_element) {
		this.canvas = canvas;
		this.ctx = canvas.getContext("2d");
		this.video_element = video_element;
		this.input = new Input();
		this.ui = new Ui(this.canvas);
		this.video_size = {w: -1, h: -1};
	}
	init() {
		const that = this;
		
		const fps = 60;

		// Draw black screen for init
		this.ctx.fillStyle = "#000000";
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

		// Play
		setInterval(function() {
			that.video_update(that.video_element, that);
		}, 1000 / fps);

		this.video_element.addEventListener('loadedmetadata', function(e) {
			that.video_size = {w: this.videoWidth, h: this.videoHeight};
		}, false);

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

		this.input.init_mouse(this.video_element);
	}
	play() {
		this.video_element.play();
	}
	toggle_play() {
		if (this.video_element.paused == true) {
			this.video_element.play();
		} else {
			this.video_element.pause();
		}
	}
	calc_video_size(width, height) {
		const calc_width = width / this.video_size.w;
		const calc_height = height / this.video_size.h;

		const max = calc_width > calc_height ? calc_height : calc_width


		return [this.video_size.w * max, this.video_size.h * max];
	}
	draw_ui() {
		this.ui.update(this.video_element);
	}
	video_update(video, ref) {
		const size = ref.calc_video_size(ref.canvas.width, ref.canvas.height);

		// center calculated size
		const x = ref.canvas.width - size[0];
		const y = ref.canvas.height - size[1];

		ref.ctx.drawImage(video, x / 2, y / 2, size[0], size[1]);

		ref.draw_ui();
	}
}
