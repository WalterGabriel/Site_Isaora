const menuButton = document.querySelector('.header_menu-button');

menuButton.addEventListener('click', openMenuList);

function openMenuList() {
  const menuList = document.querySelector('.header_nav--none');
  menuList.classList.toggle('header_nav--active');
  
  menuButton.textContent === "menu"
    ? menuButton.textContent = "close"
    : menuButton.textContent = "menu"
    ;
}

//CABINET SLIDE CONTROL
let currentSlide = 0;
const slides = document.querySelectorAll('.cabinet_slide');
const totalSlides = slides.length;
const slidesContainer = document.querySelector('.cabinet_slides');
let interval;

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    slidesContainer.style.transform = `translateX(${offset}%)`;

    resetInterval(); // Reset the interval whenever a slide is manually changed
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

function startAutoSlide() {
    interval = setInterval(() => {
        moveSlide(1);
    }, 6000); // Change slide every 3 seconds
}

function resetInterval() {
    clearInterval(interval);
    startAutoSlide();
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    startAutoSlide();
    addSwipeListeners();
});

function addSwipeListeners() {
    let touchStartX = 0;
    let touchEndX = 0;

    slidesContainer.addEventListener('touchstart', (event) => {
        touchStartX = event.changedTouches[0].screenX;
    });

    slidesContainer.addEventListener('touchend', (event) => {
        touchEndX = event.changedTouches[0].screenX;
        handleSwipeGesture();
    });

    function handleSwipeGesture() {
        if (touchEndX < touchStartX) {
            moveSlide(1); // Swiped left
        } else if (touchEndX > touchStartX) {
            moveSlide(-1); // Swiped right
        }
    }
}


