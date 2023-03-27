//show sub-menu on hover over services

const servicesBtn = document.getElementsByClassName('services-btn')[0];
const dropDownSubMenu = document.getElementsByClassName('dropdown-content')[0];
const mainMenu = document.getElementById('main-menu').children[1];
// console.log(mainMenu);
const marker = document.getElementById('marker');

servicesBtn.addEventListener('mouseover', function () {
  dropDownSubMenu.classList.add('show-submenu');


});

servicesBtn.addEventListener('mouseout', function () {
  if (!mouseOverOut(dropDownSubMenu)) {
    dropDownSubMenu.classList.remove('show-submenu');
  }
});

function mouseOverOut(el) {
  el.addEventListener('mouseover', () => {
    el.classList.add('show-submenu');
  });
  el.addEventListener('mouseout', () => {
    el.classList.remove('show-submenu');
  });

}

