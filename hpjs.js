window.onscroll = function () {
    scrollfunction1()
    scrollfunction2()
}

function scrollfunction1() {
    if (document.body.scrollTop> 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("login2").style.opacity="1";
    }
    else{document.getElementById("login2").style.opacity="0";
    }
}

function scrollfunction2() {
    if (document.body.scrollTop> 950 || document.documentElement.scrollTop > 950) {
        document.getElementById("login3").style.opacity="1";

    }
    else{document.getElementById("login3").style.opacity="0";
    }
}


var x = document.getElementById("song1");
function playAudio() {
    x.play();
    document.getElementById("it1_s").style.display="block";
    document.getElementById("it1").style.display="none";
    document.getElementById("video1").style.display="block"
    document.getElementById("it2_1").style.animationPlayState="running";
}
function pauseAudio() {
    x.pause();
    document.getElementById("it1_s").style.display="none";
    document.getElementById("it1").style.display="block";
    document.getElementById("video1").style.display="none"
    document.getElementById("it2_1").style.animationPlayState="paused";
}



var y = document.getElementById("song2");
function playAudio2() {
    y.play();
    document.getElementById("it2_s").style.display="block";
    document.getElementById("it2").style.display="none";
    document.getElementById("video2").style.display="block"
    document.getElementById("it2_2").style.animationPlayState="running";
}
function pauseAudio2() {
    y.pause();
    document.getElementById("it2_s").style.display="none";
    document.getElementById("it2").style.display="block";
    document.getElementById("video2").style.display="none"
    document.getElementById("it2_2").style.animationPlayState="paused";
}


var z = document.getElementById("song3");
function playAudio3() {
    z.play();
    document.getElementById("it3_s").style.display="block";
    document.getElementById("it3").style.display="none";
    document.getElementById("video3").style.display="block"
    document.getElementById("it2_3").style.animationPlayState="running";
}
function pauseAudio3() {
    z.pause();
    document.getElementById("it3_s").style.display="none";
    document.getElementById("it3").style.display="block";
    document.getElementById("video3").style.display="none"
    document.getElementById("it2_3").style.animationPlayState="paused";
}
