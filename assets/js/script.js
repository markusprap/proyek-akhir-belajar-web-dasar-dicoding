const toggleMenu = document.querySelector('.toggle-menu');
const menu = document.querySelector('.menu');

toggleMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!toggleMenu.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove('active');
  }
});