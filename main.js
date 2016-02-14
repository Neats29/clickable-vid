var overlay = document.getElementById('overlay');
var video = document.getElementById('vid');
video.addEventListener('progress', function() {
    var show = video.currentTime >=1 && video.currentTime < 10;
    overlay.style.visibility = show ? 'visible' : 'hidden';
}, false);
var circle = document.getElementById('circle');
var modal = document.getElementById('modal');
var close = document.getElementById('close');
circle.addEventListener('click', function(){
  modal.style.display = 'block';
  circle.style.display = 'none';
  video.pause();
}, false);
modal.addEventListener('click', function(){
  modal.style.display = 'none';
  video.play();
}, false);