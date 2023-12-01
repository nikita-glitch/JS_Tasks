let thumb = slider.querySelector('.thumb');

thumb.addEventListener('mousedown', (e) => {
  e.preventDefault();
  let leftCoordX = e.clientX - thumb.getBoundingClientRect().left;
  document.addEventListener('mouseup', handleMouseUp);
  document.addEventListener('mousemove', handleMouseMove)

function handleMouseMove(e) {
  let changedLeftCoord = e.clientX - leftCoordX - slider.getBoundingClientRect().left;
  if (changedLeftCoord < 0) {
    changedLeftCoord = 0;
  }
  let rigthBorder = slider.offsetWidth - thumb.offsetWidth;
  if (changedLeftCoord > rigthBorder) {
    changedLeftCoord = rigthBorder;
  }
  thumb.style.left = changedLeftCoord + 'px';

}
function handleMouseUp(e) {
  document.removeEventListener('mouseup', handleMouseUp);
  document.removeEventListener('mousemove', handleMouseMove);
}
})

slider.ondragstart = function() {
  return false;
};