var overlay        = document.getElementById('js-overlay-container');
var video          = document.getElementById('js-video');
var indicator      = document.getElementById('js-overlay__indicator');
var overlayMessage = document.getElementById('js-overlay--message');
var close          = document.getElementById('js-overlay--close');
var overlayImage   = document.getElementById("js-overlay--image");


var scene1 = {
  image: "home.jpeg",
  video: "http://techslides.com/demos/sample-videos/small.mp4",
  indicatorAppears: 0,
  indicatorDisppears: 6,
  overlayAppears: "", //if overlay will appear regardless of clicking indicator
  overlayDisppears: 6,
};
var scenes = [scene1];

//show indicator up to 6 secs into vid, after 6 it should Disappear
function showIndicator(start, end) {
  video.addEventListener('progress', function() {
  var show = video.currentTime >= start && video.currentTime < end;
      overlay.style.visibility = show ? 'visible' : 'hidden';
  }, false);
}
//showIndicator();

//show overlay once indicator is clicked
function showOverlay(image) {
  indicator.addEventListener('click', function(){
    overlayMessage.style.display = 'block';
    changeImage(image);
    indicator.style.display = 'none';
  //  video.pause();
  }, false);
}
//showOverlay();

//close overlay image and text
function closeOverlayMessage(videoSrc) {
  overlayMessage.style.display = 'none';
  video.src = videoSrc;
}

//close overlay manually
function closeOverlayMessageManually(videoSrc) {
  close.addEventListener('click', function(){
   closeOverlayMessage(videoSrc);
  }, false);
}


//close overlay automatically after 6 secs
function closeOverlayMessageAuto(end, videoSrc) {
  video.addEventListener('progress', function() {
    var show = video.currentTime > end;
    return show ? closeOverlayMessage(videoSrc) : false;
  }, false);
}

//change image url
function changeImage(url) {
  overlayImage.style.backgroundImage="url(" + url + ")";
}



/////-------------------------------------------------------/////

function playAllScenes() {
  return scenes.forEach(function(scene){
    console.log(scene);
    showIndicator(scene.indicatorAppears, scene.indicatorDisppears);
    showOverlay(scene.image);
    closeOverlayMessageManually(scene.video);
    closeOverlayMessageAuto(scene.overlayDisppears, scene.video);
  });
}


playAllScenes();