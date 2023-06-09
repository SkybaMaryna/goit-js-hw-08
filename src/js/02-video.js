import Vimeo from "@vimeo/player";
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on('timeupdate', throttle(function(data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data));
}, 1000));

const savedSettings = localStorage.getItem("videoplayer-current-time");
const parsedSettings = JSON.parse(savedSettings);

if (parsedSettings && parsedSettings.seconds) {
    player.setCurrentTime(parsedSettings.seconds)
}