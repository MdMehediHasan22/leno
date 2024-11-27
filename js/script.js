document.addEventListener('DOMContentLoaded',function(){
    const toggleButton = document.querySelector('.navbar_mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar_mobile-menu-items');

    toggleButton.addEventListener('click',function(){
        mobileMenu.classList.toggle('active');
    })
})