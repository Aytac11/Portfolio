const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const logo = document.querySelector('.logo');

openMenu.addEventListener('click', function() {
    mainMenu.style.display = 'flex';
    openMenu.style.opacity = "0"
    logo.style.opacity = "0";
    mainMenu.style.top = '0';
});
closeMenu.addEventListener('click', function() {
    mainMenu.style.top = '-100%';
    openMenu.style.opacity = "100%"
    logo.style.opacity = "100%";
});

$(document).ready(function() {

    var headerHeight = $('header').outerHeight(); // Target your header navigation here

    $('#main-nav li a').click(function(e) {

        var targetHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(targetHref).offset().top - headerHeight // Add it to the calculation here
        }, 1000);

        e.preventDefault();
    });
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}