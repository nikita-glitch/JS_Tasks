let div;
let currentElem = null;
document.addEventListener('mouseover', (e) => {
  let target = e.target.closest('[data-tooltip]')
  if (!target.hasAttribute('data-tooltip')) {
    return;
  }
  
  div = document.createElement('div');
  div.className = 'tooltip'
  div.innerHTML = target.dataset.tooltip;
  target.prepend(div)
})
document.addEventListener('mouseout', (e)=>{
  let target = e.target.closest('[data-tooltip]')
  if (!target.hasAttribute('data-tooltip')) {
    return;
  }
  
  div.remove();
  div = null;

})