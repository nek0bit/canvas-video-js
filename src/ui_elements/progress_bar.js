
export class ProgressBar {
	constructor(video) {
		this.video = video;
		this.config = {
			size: 40,
			font_size: 12
		};
	}
	get_position_string() {
		const begin = new Date(this.video.currentTime * 1000).toISOString().substr(11, 8);
		const end = new Date(this.video.duration * 1000).toISOString().substr(11, 8);
		return begin + " / " + end;
	}
	update(ctx, pos_x, pos_y, width) {
		const old = ctx.fillStyle;
		const old_font = ctx.font;


		ctx.font = this.config.font_size+'px arial';

		// Render background
		ctx.fillStyle = 'rgb(0, 0, 0, 0.6)';
		ctx.fillRect(pos_x, pos_y, width, this.config.size);

		// Render progress
		const begin = this.video.currentTime;
		const end = this.video.duration;
		const progress = (begin / end) * width;
		ctx.fillStyle = 'rgb(255, 255, 255)';
		ctx.fillRect(pos_x, pos_y, progress, this.config.size);

		// Render text
		const start_pos = pos_x+(this.config.size/2)

		ctx.fillStyle = 'rgb(255, 255, 255)';
		ctx.fillText(this.get_position_string(), start_pos, pos_y+(this.config.size/2)+(this.config.font_size/2));

		// Render black text
		let text_width = 0;
		if (progress > this.config.size/2) {
			text_width = progress-this.config.size/2;
		}
		ctx.fillStyle = 'rgb(0, 0, 0)';
		
		// -- make clip
		ctx.save();
		ctx.beginPath();
		ctx.rect(pos_x, pos_y, progress, this.config.size);
		ctx.clip();
		ctx.fillText(this.get_position_string(), start_pos, pos_y+(this.config.size/2)+(this.config.font_size/2));
		ctx.restore();

		ctx.font = old_font;
		ctx.fillStyle = old;
	}
}
