import Vimeo from "@vimeo/player";
const throttle = require('lodash.throttle');


const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const savedSettings = localStorage.getItem("videoplayer-current-time");
const parsedSettings = JSON.parse(savedSettings);

player.setCurrentTime(parsedSettings.seconds)

player.on('timeupdate', throttle(function(data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data));
}, 1000));
