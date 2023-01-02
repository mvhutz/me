window.onload = main;

function calcScroll() {
  document.body.style.setProperty("--scroll", window.scrollY / (0.7 * window.innerHeight));
}

function main() {
  window.addEventListener("scroll", calcScroll);
  calcScroll();
}