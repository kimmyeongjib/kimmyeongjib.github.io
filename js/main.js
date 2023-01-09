let mainText01 = document.querySelector(".txtBox")

window.addEventListener('scroll',function(){
    let value = window.scrollY
    console.log("scrolly", value);

    if(value>150) {
        mainText01.style.animation = "backSlide01 1.5s ease forwards";
    } else {
        mainText01.style.animation = "slide01 1.5s ease";
    }
});

let mainText02 = document.querySelector(".intro .right")

window.addEventListener('scroll',function(){
    let value = window.scrollY
    console.log("scrolly", value);

    if(value>1000) {
        mainText02.style.animation = "slide03 1.5s ease forwards";
    } else {
        mainText02.style.animation = "backSlide03 1.5s ease forwards";
    }
});

let mainText03 = document.querySelector(".profile .left")

window.addEventListener('scroll',function(){
    let value = window.scrollY
    console.log("scrolly", value);

    if(value>1700) {
        mainText03.style.animation = "slide04 1.5s ease forwards";
    } else {
        mainText03.style.animation = "backSlide04 1.5s ease forwards";
    }
});

$(".menu").click(function(){
    $("#nav").addClass("on");
    $(".close").addClass("on");
    $(".menu").addClass("on");
});

$(".close").click(function(){
    $("#nav").removeClass("on");
    $(".close").removeClass("on");
    $(".menu").removeClass("on");
});

$(".img03").click(function(){
    $(".connect").toggleClass("on");
});