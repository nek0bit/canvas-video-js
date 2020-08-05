export class Input {
	constructor() {	
		this.keys = {
			pause: ["KeyP"],
			play_pause_toggle: ["Space", "Enter"],
			seek_left: ["ArrowLeft", "KeyH"],
			seek_right: ["ArrowRight", "KeyL"]
		};
	}
	set_config(config) {
		this.keys = config;
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
