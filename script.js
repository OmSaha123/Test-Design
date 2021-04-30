var play = document.querySelector(".fa-play");
var video = document.querySelector(".vid");
var bar = document.querySelector(".video-juice");
var sound = document.querySelector(".fa-volume-up");
var soundbar = document.querySelector("#vol-control");
var fullscreen = document.querySelector(".fullscreen");
var vplay = document.querySelector(".video-player");

 video.onclick = () => {
    if(video.paused){
        play.classList.remove("fa-play");
        play.classList.add("fa-pause");
        video.play();
    }
    else{
        play.classList.remove("fa-pause");
        play.classList.add("fa-play");
        video.pause();
    }
 }

play.onclick = () => {
    if(video.paused){
        play.classList.remove("fa-play");
        play.classList.add("fa-pause");
        video.play();
    }
    else{
        play.classList.remove("fa-pause");
        play.classList.add("fa-play");
        video.pause();
    }
}

video.addEventListener('timeupdate', function (e) {
    var juicepos = video.currentTime / video.duration;
    bar.style.width = juicepos * 100 + "%";
    if(video.ended){
        console.log("Ended")
        play.classList.remove("fa-pause");
        play.classList.add("fa-play");
        video.pause();
    }
});

window.addEventListener("keydown", checkKeyPress, false);
 
function checkKeyPress(key) {
 if (key.keyCode == "32") {
 
    if(video.paused){
        play.classList.remove("fa-play");
        play.classList.add("fa-pause");
        video.play();
    }
    else{
        play.classList.remove("fa-pause");
        play.classList.add("fa-play");
        video.pause();
    }

 }
 else if(key.keyCode == "77"){

    if(video.volume != 0){
        sound.classList.add("fa-volume-mute");
        sound.classList.remove("fa-volume-up");
        video.volume = 0;
        console.log(video.volume);
        soundbar.value = "0";
    }
    else{
        sound.classList.add("fa-volume-up");
        sound.classList.remove("fa-volume-mute");
        video.volume = 1;
        console.log(video.volume);
        soundbar.value = "100";
    }

 }

}

function SetVolume(val)
{
    video.volume = val / 100;

}

var isFullScreen = function() {
    return !!(vplay.fullscreen || vplay.webkitIsFullScreen || vplay.mozFullScreen || vplay.msFullscreenElement || vplay.fullscreenElement);
}

fullscreen.onclick = () => {
    if(isFullScreen){
        if(vplay.requestFullScreen){
            vplay.requestFullScreen();
        } else if(vplay.webkitRequestFullScreen){
            vplay.webkitRequestFullScreen();
        } else if(vid.mozRequestFullScreen){
            vplay.mozRequestFullScreen();
        }
    }
    
}
sound.onclick = () => {

    if(video.volume != 0){
        sound.classList.add("fa-volume-mute");
        sound.classList.remove("fa-volume-up");
        video.volume = 0;
        console.log(video.volume);
        soundbar.value = "0";
    }
    else{
        sound.classList.add("fa-volume-up");
        sound.classList.remove("fa-volume-mute");
        video.volume = 1;
        console.log(video.volume);
        soundbar.value = "100";
    }

}