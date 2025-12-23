document.querySelectorAll('.gallery-image').forEach(img => {
    img.addEventListener('mouseenter', function() {
        this.style.transition = 'transform 0.3s ease';
    });

    img.addEventListener('click', function() {
        const caption = this.parentElement.querySelector('.gallery-caption').textContent;
        showAlert(`Выбрана игра: ${caption}`);
    });
});

const sectionTitles = document.querySelectorAll('.info-title, .gallery-title, .additional-title');
sectionTitles.forEach(title => {
    title.addEventListener('click', function() {
        this.style.color = this.style.color === 'rgb(255, 215, 0)' ? '#d4af37' : '#ffd700';
    });
});