
 var video = document.querySelector("#videoElement");
 
if (navigator.mediaDevices.getUserMedia) {       
    navigator.mediaDevices.getUserMedia({video: true})
  .then(function(stream) {
    video.srcObject = stream;
  })
  .catch(function(err0r) {
    console.log("There was a problem accessing your webCam");
  });
}

