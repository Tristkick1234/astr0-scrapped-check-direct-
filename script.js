
/*audio wouldnt play on window load, solution 1 23
window.onload = function() {
    document.getElementById("myAudio").play();
}*/

let header = document.querySelector("nav");
let audio_file = new Audio("/photos/longrain.mp3");
body.onmouseover = function(){
    audio_file.play();
}