/*Adding variables for controls, video player, and timer parts*/
var media = document.querySelector('video');
var controls = document.querySelector('.controls');

var play = document.querySelector('.play');
var stop = document.querySelector('.stop');
var rwd = document.querySelector('.rwd');
var fwd = document.querySelector('fwd');

var timerWrapper = document.querySelector('.timer');
var timer = document.querySelector('.timer span');
var timerBar = document.querySelector('.timer div');

/*Telling the browser to hide default controls to implement custom controls*/
media.removeAttribute('controls');
controls.style.visability = 'visible';

play.addEventListener('click', playPauseMedia);

/*Checking to see if the video is paused or not, if it is, display the play icon, if it's playing, display the pause icon*/
function playPauseMedia() {
  if(media.paused) {
    play.setAttribute('data-icon', 'u');
    media.play();
  } else {
    play.setAttribute('data-icon', 'P');
    media.pause();
    rwd.classList.remove('active');
    fwd.classList.remove('active');
    clearInterval(intervalRwd);
    clearInterval(intervalFwd);
  }
}
/*End the video when we tell it to, or stop it when it's ended*/
stop.addEventListener('click', stopMedia);
media.addEventListener('ended', stopMedia);

function stopMedia() {
  media.pause();
  media.currentTime = 0;
  play.setAttribute('data-icon', 'P');
  rwd.classList.remove('active');
  fwd.classList.remove('active');
  clearInterval(intervalRwd);
  clearInterval(intervalFwd);
}

rwd.addEventListener('click', mediaBackward);
fwd.addEventListener('click', mediaForward);

media.addEventListener('timeupdate', setTime);

/*Introducing forward and backwards variables*/
var intervalFwd;
var intervalRwd;

/*Cancels the forward button so that the player doesn't break while pushing the rewind button*/
/*Then we check to see if the button has been pressed, if yes, we remove its active status and clear the button to avoid breaking, and play the video as normal*/
function mediaBackward() {
  clearInterval(intervalFwd);
  fwd.classList.remove('active');

  if(rwd.classList.contains('active')) {
    rwd.classList.remove('active');
    clearInterval(intervalRwd);
    media.play();
  } else {
    rwd.classList.add('active');
    media.pause();
    intervalRwd = setInterval(windBackward, 200);
  }
}

/*Does the same thing as the mediaBackward function, only the opposite*/
function mediaForward() {
  clearInterval(intervalRwd);
  rwd.classList.remove('active');

  if(fwd.classList.contains('active')) {
    fwd.classList.remove('active');
    clearInterval(intervalFwd);
    media.play();
  } else {
    fwd.classList.add('active');
    media.pause();
    intervalFwd = setInterval(windForward, 200);
  }
}
/*Checks to see if the video's current time is under 3 seconds, this is so we can remove the rewind functionality to avoid breaking the player*/
function windbackward() {
  if(media.currentTime <= 3) {
    stopMedia();
  } else {
    media.currentTime -= 3;
  }
}

function windForward() {
  if(media.currentTime >= media.duration - 3) {
    fwd.classList.remove('active');
    clearInterval(intervalFwd);
    stopMedia();
  } else {
    media.currentTime += 3;
  }
}
/*Define time in minutes and seconds, then create variables for those values*/
/*If the seconds and minutes are less than value 10, fix the timer to display properly according to minutes or seconds*/
function setTime() {
  var minutes = Math.floor(media.currentTime / 60);
  var seconds = Math.floor(media.currentTime - minutes * 60);
  var minuteValue;
  var secondValue;

  if (minutes < 10) {
    minuteValue = '0' + minutes;
  } else {
    minuteValue = minutes;
  }

  if (seconds < 10) {
    secondValue = '0' + seconds;
  } else {
    secondValue = seconds;
  }

  var mediaTime = minuteValue + ':' + secondValue;
  timer.textContent = mediaTime;

  var barLength = timerWrapper.clientWidth * (media.currentTime/media.duration);
  timerBar.style.width = barLength + 'px';
}
