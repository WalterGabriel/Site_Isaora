const menuButton = document.querySelector('.header_menu-button');

menuButton.addEventListener('click', openMenuList);

function openMenuList() {
  const menuList = document.querySelector('.header_nav--none');
  menuList.classList.toggle('header_nav--active');
  
  menuButton.textContent === "menu"
    ? menuButton.textContent = "close"
    : menuButton.textContent = "menu"
    ;
}