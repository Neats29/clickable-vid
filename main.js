var overlay = document.getElementById('overlay');
var video = document.getElementById('vid');
var circle = document.getElementById('circle');
var modal = document.getElementById('modal');
var close = document.getElementById('close');

video.addEventListener('progress', function() {
  //currentTime is in seconds
var show = video.currentTime >=1 && video.currentTime < 10;
    overlay.style.visibility = show ? 'visible' : 'hidden';
}, false);

circle.addEventListener('click', function(){
  modal.style.display = 'block';
  circle.style.display = 'none';
  video.pause();
}, false);

modal.addEventListener('click', function(){
  modal.style.display = 'none';
  video.play();
}, false);