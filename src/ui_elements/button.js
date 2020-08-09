export class Button {
	constructor(text, icon = null) {
		this.text = text;
		this.icon = icon;
		this.config = {
			size: 40,
			font_size: 14,
			icon_padding: 14
		};
	}
	change_icon(new_icon) {
		this.icon = new_icon;
	}
	update(ctx, pos_x, pos_y) {
		const old = ctx.fillStyle;
		const old_font = ctx.font;

		ctx.font = this.config.font_size+'px arial';

		const text_width = ctx.measureText(this.text);
		let using_icon = false;

		if (this.icon) {
			using_icon = true;
		}

		// Render button
		ctx.fillStyle = 'rgb(0, 0, 0, 0.6)';
		if (using_icon) {
			ctx.fillRect(pos_x, pos_y, this.config.size+(this.text ? this.config.icon_padding + text_width.width : 0), this.config.size);
		} else {
			ctx.fillRect(pos_x, pos_y, this.config.size+text_width.width, this.config.size);
		}

		// Render icon
		if (this.icon) {
			ctx.drawImage(this.icon, pos_x+this.config.icon_padding,
				pos_y+this.config.icon_padding,
				this.config.size-(this.config.icon_padding*2),
				this.config.size-(this.config.icon_padding*2));
		}

		// Render text
		ctx.fillStyle = 'rgb(255, 255, 255)';
		if (this.text)
			if (using_icon)
				ctx.fillText(this.text, this.config.size/2+pos_x+(this.config.size/2), pos_y+(this.config.size/2)+(this.config.font_size/2));
			else
				ctx.fillText(this.text, pos_x+(this.config.size/2), pos_y+(this.config.size/2)+(this.config.font_size/2));

		ctx.font = old_font;
		ctx.fillStyle = old;
	}
}
