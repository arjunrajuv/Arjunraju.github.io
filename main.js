const video = document.querySelector("video");
if (window.matchMedia("(prefers-reduced-motion)").matches) {
    video.removeAttribute("autoplay");
    video.pause();
}

const header = document.querySelector('.navbar');

window.onscroll = function () {
    var top = window.scrollY;
    if (top >= 500) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}