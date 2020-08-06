export class Input {
	constructor() {	
		this.keys = {
			pause: ["KeyP"],
			play_pause_toggle: ["Space", "Enter"],
			seek_left: ["ArrowLeft", "KeyH"],
			seek_right: ["ArrowRight", "KeyL"]
		};
		this.mousedown = 0;
		this.mouse_pos = {x: 0, y: 0};
	}
	set_config(config) {
		this.keys = config;
	}
	init_mouse(element) {
		element.addEventListener("mousemove", (e) => {
			let rect = element.getBoundingClientRect();
			this.mouse_pos = {x: e.clientX - rect.left, y: e.clientY - rect.top};
		});
	}
	get_mouse_pos() {
		return this.mouse_pos;
	}
	get_key_pressed(event, key) {
		// See if key pressed
		for (let e of this.keys[key]) {
			if (event.code == e) {
				return true;
			}
		}

		return false;
	}
}
