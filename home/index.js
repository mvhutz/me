function calcScroll() {
  const scroll = window.scrollY;
  const vh = window.innerHeight / 100;
  const title = document.getElementById("title-page");
  if (title == null) return;
  
  title.style.setProperty("--scroll", Math.min(1, scroll / (77.5 * vh)));
}

function openMenu() {
  const menu = document.getElementById("menu-modal");
  if (menu == null) return;
  menu.showModal();
}

function closeMenu() {
  const menu = document.getElementById("menu-modal");
  if (menu == null) return;
  menu.close();
}

function main() {
  window.addEventListener("scroll", () => requestAnimationFrame(calcScroll));

  const menu = document.getElementById("menu-modal");
  if (menu == null) return;
  menu.addEventListener("click", clickMenuModal);
  menu.addEventListener("touchstart", clickMenuModal);
}

function clickMenuModal(e) {
  const menu = document.getElementById("menu-modal");
  if (menu == null || e.target != menu) return;
  closeMenu();
}

window.onload = main;