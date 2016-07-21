
//Opens Video Overlay
var overlay = document.getElementsByClassName("videoOverlay");
document.getElementById("viewVideoButton").onclick = function() {
    overlay[0].style.display = "inline";
}

//Closes Video Overlay
document.getElementsByClassName("exitVideoButton")[0].onclick = function() {
    overlay[0].style.display = "none";
}
