let menuOpen = true;

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
  requestAnimationFrame(() => menuOpen = false);
  menu.showModal();
}

function closeMenu() {
  const menu = document.getElementById("menu-modal");
  if (menu == null) return;
  requestAnimationFrame(() => menuOpen = true);
  menu.close();
}

function main() {
  document.body.addEventListener('wheel', preventScroll, { passive: false });
  document.body.addEventListener('touchmove', preventScroll, { passive: false });
  window.addEventListener("scroll", () => requestAnimationFrame(calcScroll));

  const menu = document.getElementById("menu-modal");

  if (menu) {
    menu.addEventListener("click", clickMenuModal);
    menu.addEventListener("touchstart", clickMenuModal);
  }
}

function clickMenuModal(e) {
  const menu = document.getElementById("menu-modal");
  if (menu == null || e.target != menu) return;
  closeMenu();
}

function preventScroll(e) {
  if (menuOpen) return;
  e.preventDefault();
  e.stopPropagation();
  return false;
}

window.onload = main;