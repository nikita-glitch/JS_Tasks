document.addEventListener('click', (e) => {
  let target = e.target;
  if (!target.closest('a')) {
    return;
  }
  e.preventDefault()
  let largeImg = document.getElementById('largeImg');
  largeImg.removeAttribute("src");
  largeImg.setAttribute('src',  target.closest('a').getAttribute("href"));
})