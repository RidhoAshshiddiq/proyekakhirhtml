const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const accordionTitle = item.querySelector('.accordion-title');

    accordionTitle.addEventListener('click', () => {
        item.classList.toggle('active');

        // Menutup semua accordion kecuali yang sedang diklik
        accordionItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
    });
});