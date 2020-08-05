const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'canvas-video-build.js',
		path: path.resolve(__dirname, 'dist')
	}
}
