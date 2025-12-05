document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    burgerMenu.addEventListener('click', function() {
        // Переключаем классы для бургер-кнопки и меню
        burgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Блокируем прокрутку страницы при открытом меню
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Закрываем меню при клике на ссылку
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            burgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Закрываем меню при клике вне его области
    document.addEventListener('click', function(event) {
        if (!navMenu.contains(event.target) && !burgerMenu.contains(event.target) && navMenu.classList.contains('active')) {
            burgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});