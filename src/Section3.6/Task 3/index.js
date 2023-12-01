function isVisible(elem) {

  if (
    (elem.getBoundingClientRect().top > 0 &&
      elem.getBoundingClientRect().top <
        document.documentElement.clientHeight) ||
    (elem.getBoundingClientRect().bottom > 0 &&
      elem.getBoundingClientRect().bottom <
        document.documentElement.clientHeight)
  ) {
    return true;
  }
}

function showVisible() {
  for (let img of document.querySelectorAll("img")) {
    let realSrc = img.dataset.src;
    if (!realSrc) continue;

    if (isVisible(img)) {
      // отключение кеширования
      // эта строка должна быть удалена в "боевом" коде
      realSrc += "?nocache=" + Math.random();

      img.src = realSrc;
      img.dataset.src = "";
    }
  }
}

window.addEventListener("scroll", showVisible);
showVisible();
