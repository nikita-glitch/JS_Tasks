let div;
document.addEventListener('mouseover', (e)=>{
  let target = e.target
  if (target.tagName != 'BUTTON') {
    return;
  }
  div = document.createElement('div');
  div.className = 'tooltip'
  div.innerHTML = target.dataset.tooltip;
  target.prepend(div)
})

document.addEventListener('mouseout', (e)=>{
  let target = e.target
  if (target.tagName != 'BUTTON') {
    return;
  }
  
  div.remove();
  div = null;

})