const carousels = document.querySelectorAll('.carousel-container');

carousels.forEach(carousel => {
    const items = carousel.querySelectorAll('.contents');
    const prevBtn = carousel.querySelector('.prev-btn');
    const nextBtn = carousel.querySelector('.next-btn');

    let currentIndex = 0;
    const totalItems = items.length;

    if (totalItems <= 1) {
        if (prevBtn) prevBtn.style.display = 'none';
        if (nextBtn) nextBtn.style.display = 'none';
        return;
    }

    function updateCarousel() {
        items.forEach((item, index) => {
            item.classList.remove('active');

            if (index === currentIndex) {
                item.classList.add('active');
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex++;

            if (currentIndex >= totalItems) {
                currentIndex = 0;
            }

            updateCarousel();
        });
    }


    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex--;

            if (currentIndex < 0) {
                currentIndex = totalItems - 1;
            }

            updateCarousel();
        });
    }

    updateCarousel();
});