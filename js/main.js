'use strict';
function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(52.2, 21.02),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

document.body.className += " fade-out";

/* efekt opacity z opoznieniem zmienic na scroll cos tam */
function usun() {    
    document.querySelector('body').classList.remove('fade-out');    
}

function hej() {
    setTimeout(usun, 1);
}
window.onload = hej();

/* koniec efektu */