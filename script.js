const toggleBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const icon = document.querySelector('.menu-toggle span');



toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('active');

     if(nav.classList.contains('active')){
        icon.classList.remove('mdi-menu');
        icon.classList.add('mdi-close');
    } else {
        icon.classList.remove('mdi-close');
        icon.classList.add('mdi-menu');
    }

});