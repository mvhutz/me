window.onload = () => {
  const links = document.querySelectorAll('link[rel="preload"]');
  for (const link of links) link.rel = 'stylesheet';
}