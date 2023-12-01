let arrow = document.getElementById("arrowTop");
arrow.addEventListener("click", (e) => {
  window.scrollTo(scrollY, 0);
});
document.addEventListener("scroll", (e) => {
  document.documentElement.clientHeight > scrollY ?
    arrow.hidden = true
  :
    arrow.hidden = false;
  
});
