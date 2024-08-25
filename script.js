const menuBtn = document.getElementById('menu-btn');
const menuSection = document.getElementById('menu');

menuBtn.addEventListener('click', () =>{
    menuSection.scrollIntoView({behaviour: 'smooth'});
});