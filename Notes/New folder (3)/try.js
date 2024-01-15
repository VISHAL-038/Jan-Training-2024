const carouselImages = document.querySelectorAll('.carousel-image');
let currentIndex = 0;

function changeImage(index) {
    carouselImages[currentIndex].style.opacity = 0;
    currentIndex = index;
    carouselImages[currentIndex].style.opacity = 1;
}

// Change the image every 3 seconds
// setInterval(function () {
//     changeImage((currentIndex + 1) % carouselImages.length);
// }, 3000);

// Change the image on click
carouselImages.forEach(function (image, index) {
    image.addEventListener('click', function () {
        changeImage(index);
    });
});