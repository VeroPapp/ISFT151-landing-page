// selector
var menu = document.querySelector('.lineas-menu-hamb');

// method
function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menu" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);
