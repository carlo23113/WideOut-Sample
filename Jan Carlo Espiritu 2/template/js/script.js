// Javascript template

var images,
    loadedImage = 0;

function preload() {
    images = new Array(
        
        
        // list images needed from the assets folder
        "images/female.png","images/headline1.png","images/headline2.png","images/subheadline.png","images/button2.png","images/logo.png","images/replay.png"
        
        
    );

    for (var i = 0; i < images.length; i++) {
        imageObj = new Image();
        imageObj.src = images[i];
        imageObj.addEventListener("load", iLoad, false);
    }
}

function iLoad() {
      
    loadedImage++;
    if (images.length == loadedImage) {
        
        // set the background for each div by calling the images declared on the array
        female.style.backgroundImage = 'url("'+images[0]+'")';
        headline1.style.backgroundImage = 'url("'+images[1]+'")';
        headline2.style.backgroundImage = 'url("'+images[2]+'")';
        subheadline.style.backgroundImage = 'url("'+images[3]+'")';
        button2.style.backgroundImage = 'url("'+images[4]+'")';
        logo.style.backgroundImage = 'url("'+images[5]+'")';
        init();
    }
    setTimeout(function(){ fadeIn() }, 1000);
    setTimeout(function(){ fadeOut() }, 3000);
    setTimeout(function(){ slideIn() }, 1500);
    setTimeout(function(){ slideOut() }, 3000);
    setTimeout(function(){ headline2SlideIn() }, 4000);
    setTimeout(function(){ subHeadlineFadeIn() }, 4500);
    setTimeout(function(){ button2FadeIn() }, 5000);
    setTimeout(function(){ logoSlideIn() }, 5500);
    setTimeout(function(){ replayFadeIn() }, 6000);
}

function init() {
    main.style.visibility = "visible";
}

// image preload function should be called upon banner load.

window.onload = function(){
    
    preload();
}

function fadeIn(){
    female.style.opacity = 1;
}

function fadeOut(){
    female.style.opacity = 0;
}

function slideIn(){
    headline1.style.transform = "translateX(0px)";
    headline1.style.opacity = 1;
}

function slideOut(){
    headline1.style.transform = "translateX(-150px)";
    headline1.style.opacity = 0;
}

function headline2SlideIn(){
    headline2.style.transform = "translateX(0px)";
    headline2.style.opacity = 1;
}

function subHeadlineFadeIn(){
    subheadline.style.opacity = 1;
}

function button2FadeIn(){
    button2.style.opacity = 1;
}

function logoSlideIn(){
    logo.style.transform = "translateX(0px)";
    logo.style.opacity = 1;
}

function replayFadeIn(){
    replay.style.opacity = 1;
}

function buttonClick(){

}

function setZero(){
    fadeOut();
    slideOut();

    headline2.style.opacity = 0;
    subheadline.style.opacity = 0;
    button2.style.opacity = 0;
    logo.style.opacity = 0;
    replay.style.opacity = 0;
    
    setTimeout(function(){ setbackPosition() }, 500);
    setTimeout(function(){ iLoad() }, 1000);
}

function setbackPosition(){
    headline2.style.transform = "translateX(-15px)";
    logo.style.transform = "translateX(150px)";
}