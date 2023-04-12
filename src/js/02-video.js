import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);


const onPlay = function (data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
};

const throttleOnPlay = throttle(onPlay, 1000);

player.on('timeupdate', throttleOnPlay);

let time = localStorage.getItem('videoProgress');
if(time != null) {
    player.setCurrentTime(time);
}

player.on('timeupdate', function() {
    player.getCurrentTime().then(function(seconds) {
        localStorage.setItem('videoProgress', seconds);
    });
});