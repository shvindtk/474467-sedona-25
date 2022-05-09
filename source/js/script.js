let navMain = document.querySelector('.navigation__menu');
let navToggle = document.querySelector('.navigation__button');

navMain.classList.remove('navigation__menu--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('navigation__menu--closed')) {
    navMain.classList.remove('navigation__menu--closed');
    navMain.classList.add('navigation__menu--opened');
  } else {
    navMain.classList.add('navigation__menu--closed');
    navMain.classList.remove('navigation__menu--opened');
  }
});
