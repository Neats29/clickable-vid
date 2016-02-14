var video = document.getElementById("video"), track;
video.addEventListener("loadedmetadata", function() { 
   track = document.createElement("track"); 
   track.kind = "subtitles"; 
   track.label = "English"; 
   track.srclang = "en"; 
   track.src = "sub.vtt";
    track.attribute = "default";
   track.addEventListener("load", function() { 
      this.mode = "showing"; 
      video.textTracks[0].mode = "showing"; // thanks Firefox 
   }); 
   this.appendChild(track); 
});