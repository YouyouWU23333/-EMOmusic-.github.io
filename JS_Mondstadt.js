

function Function_1(x) {
    if (x.matches) {
        document.getElementById('PICrep').style.cssText = "background: url(Image/PICreplace1M.png);";
        document.getElementById("tp5").innerHTML = "Anemo Archon Statue"
        document.getElementById("tp6").innerHTML = "The Anemo Archon Statue is a point of interest located in Mondstadt City, Starfell Valley, Mondstadt. It is located at the plaza in front of the Favonius Cathedral. The statue is in the image of the Anemo Archon, Barbatos, with a hood, two wings, and its hands cupped together. Therhe is a sentence carved into the statue's pedestal, reading \"The Gateway of Celestia\" in Teyvat language."

    } else {
        document.getElementById('PICrep').style.cssText = "background: url(Image/PICreplace1.png);";
        document.getElementById("tp5").innerHTML = "Anemo Archon Statue"
        document.getElementById("tp6").innerHTML = "The Anemo Archon Statue is a point of interest located in Mondstadt City, Starfell Valley, Mondstadt. It is located at the plaza in front of the Favonius Cathedral. The statue is in the image of the Anemo Archon, Barbatos, with a hood, two wings, and its hands cupped together. Therhe is a sentence carved into the statue's pedestal, reading \"The Gateway of Celestia\" in Teyvat language."
    }
}
var x = window.matchMedia("(max-width: 600px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

function Function_2(x) {
    if (x.matches) {
        document.getElementById('PICrep').style.cssText = "background: url(Image/PICreplace2_m.png);";
        document.getElementById("tp5").innerHTML = "Knights of Favonius Headquarters"
        document.getElementById("tp6").innerHTML = "Knights of Favonius Headquarters is a point of interest and an instance located in Mondstadt City, Starfell Valley, Mondstadt.\n" +
            "It is the headquarters of the Knights of Favonius. There are two rooms inside that can be entered: the Grand Master's Office and the Mondstadt Library. There is also a locked solitary confinement room, which is almost exclusively used by Klee, as well as an upstairs area that is currently untraversable."

    } else {
        document.getElementById('PICrep').style.cssText = "background: url(Image/PICreplace2.png);";
        document.getElementById("tp5").innerHTML = "Knights of Favonius Headquarters"
        document.getElementById("tp6").innerHTML = "Knights of Favonius Headquarters is a point of interest and an instance located in Mondstadt City, Starfell Valley, Mondstadt.\n" +
            "It is the headquarters of the Knights of Favonius. There are two rooms inside that can be entered: the Grand Master's Office and the Mondstadt Library. There is also a locked solitary confinement room, which is almost exclusively used by Klee, as well as an upstairs area that is currently untraversable."
    }
}
var x = window.matchMedia("(max-width: 600px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

function Function_3(x) {
    if (x.matches) {
        document.getElementById('PICrep').style.cssText = "background: url(Image/PICreplace3_m.png);";
        document.getElementById("tp5").innerHTML = "Favonius Cathedral"
        document.getElementById("tp6").innerHTML = "The Favonius Cathedral, also referred to as the Mondstadt Cathedral, is a point of interest and an instance located in Mondstadt City, Starfell Valley, Mondstadt. The cathedral is run by the Church of Favonius and is used in worshipping the Anemo Archon Barbatos. At the back of the Cathedral lies a basement in which the Holy Lyre der Himmel is kept guarded. "

    } else {
        document.getElementById('PICrep').style.cssText = "background: url(Image/PICreplace3.png),none-repeat;";
        document.getElementById("tp5").innerHTML = "Favonius Cathedral"
        document.getElementById("tp6").innerHTML = "The Favonius Cathedral, also referred to as the Mondstadt Cathedral, is a point of interest and an instance located in Mondstadt City, Starfell Valley, Mondstadt. The cathedral is run by the Church of Favonius and is used in worshipping the Anemo Archon Barbatos. At the back of the Cathedral lies a basement in which the Holy Lyre der Himmel is kept guarded. "
    }
}
var x = window.matchMedia("(max-width: 600px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

function Function_4(){
    var el = document.getElementById("hidetxt");
    if (el.style.display === "none") {
        el.style.display = "block";} else {
        el.style.display = "none"
    }
}

function Function_5(){
    var el = document.getElementById("hidetxt2");
    if (el.style.display === "none") {
        el.style.display = "block";
    } else {
        el.style.display = "none"
    }
}
function Function_6(){
    var el = document.getElementById("hidetxt3");
    if (el.style.display === "none") {
        el.style.display = "block";
    } else {
        el.style.display = "none"
    }
}

function Function_7(){
document.getElementById("hidetxt").style.display="block"
}
function Function_7H(){
    document.getElementById("hidetxt").style.display="none"
}

function Function_8(){
    document.getElementById("hidetxt2").style.display="block"
}
function Function_8H(){
    document.getElementById("hidetxt2").style.display="none"
}

function Function_9(){
    document.getElementById("hidetxt3").style.display="block"
}
function Function_9H(){
    document.getElementById("hidetxt3").style.display="none"
}

//if ($(window).width() < 600 || $(window).height() < 900) {
    //$.getScript('/js/script.js', function(){
       // function Function_1() {
            //document.getElementById("tp5").innerHTML = "Anemo Archon Statue"
            //document.getElementById("tp6").innerHTML = "The Anemo Archon Statue is a point of interest located in Mondstadt City, Starfell Valley, Mondstadt. It is located at the plaza in front of the Favonius Cathedral. The statue is in the image of the Anemo Archon, Barbatos, with a hood, two wings, and its hands cupped together. Therhe is a sentence carved into the statue's pedestal, reading \"The Gateway of Celestia\" in Teyvat language."
            //document.getElementById('PICrep').style.cssText = 'background: url(Image/PICreplace1_m.png), 0px -4.343px / 100% 101.394% no-repeat;}';
        //}
   // });
//}
//

