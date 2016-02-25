var overlay = document.getElementById('js-overlay-container');
var video = document.getElementById('js-video');
var indicator = document.getElementById('js-overlay__indicator');
var overlayMessage = document.getElementById('js-overlay--message');
var close = document.getElementById('js-overlay--close');

//show indicator up to 6 secs into vid, after 6 it should dissapear
//TODO once have assets, make func that takes in 2 times for window in which indicators appear and dissapear
video.addEventListener('progress', function() {
var show = video.currentTime >= 0 && video.currentTime < 6;
    overlay.style.visibility = show ? 'visible' : 'hidden';
}, false);


//show overlay once indicator is clicked
indicator.addEventListener('click', function(){
  overlayMessage.style.display = 'block';
  indicator.style.display = 'none';
//  video.pause();
}, false);

//close overlay image and text
function closeOverlayMessage() {
    overlayMessage.style.display = 'none';
    video.src = "http://techslides.com/demos/sample-videos/small.mp4";
}

//close overlay manually
overlayMessage.addEventListener('click', function(){
 closeOverlayMessage();
}, false);

//close overlay automatically after 6 secs
video.addEventListener('progress', function() {
  var show = video.currentTime > 6;
  return show ? closeOverlayMessage() : false;
}, false);

