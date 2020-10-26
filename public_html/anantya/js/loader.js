var preloader;

function preload(opacity) {
    if(opacity <= 0) {
        showContent();
    }
    else {
        preloader.style.opacity = opacity;
        window.setTimeout(function() { preload(opacity - 0.019) }, 100);
    }
}

function showContent() {
    preloader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function () {
    preloader = document.getElementById('preloader');
    preload(1);
});