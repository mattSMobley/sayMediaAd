var overlay = document.getElementsByClassName("videoOverlay");
document.getElementById("viewVideoButton").onclick = function() {
    overlay[0].style.display = "inline";
}
document.getElementsByClassName("exitVideoButton")[0].onclick = function() {
    overlay[0].style.display = "none";
}
