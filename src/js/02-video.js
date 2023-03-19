
const player = new Vimeo.Player('#vimeo-player');

player.on('play', function() {
        console.log('played the video!');
    });
