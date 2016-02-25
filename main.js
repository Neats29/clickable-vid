var overlay = document.getElementById('js-overlay-container');
var video = document.getElementById('js-video');
var indicator = document.getElementById('js-overlay__indicator');
var modal = document.getElementById('js-overlay--message');
var close = document.getElementById('js-overlay--close');

video.addEventListener('progress', function() {
  //currentTime is in seconds
var show = video.currentTime >=0 && video.currentTime < 10;
    overlay.style.visibility = show ? 'visible' : 'hidden';
}, false);

indicator.addEventListener('click', function(){
  modal.style.display = 'block';
  indicator.style.display = 'none';
  video.pause();
}, false);

modal.addEventListener('click', function(){
  modal.style.display = 'none';
  video.src = "http://techslides.com/demos/sample-videos/small.mp4";
}, false);