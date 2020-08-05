import { CanvasVideo } from './canvas-video.js';  

const canvas = document.getElementById("sample-player");

const sample = new CanvasVideo(canvas, document.getElementById("video-player"));

sample.init();
