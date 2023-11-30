document.addEventListener('mousedown', (e) => {
  let target = e.target;
  if (target.tagName != 'LI') {
    return
  }
  e.preventDefault();
})
document.addEventListener('click', (e) => {
  let target = e.target;
  if (target.tagName != 'LI') {
    return;
  }
  if (e.ctrlKey || e.metaKey) {
    target.setAttribute('class', 'selected');
  } else {
    let li = document.querySelectorAll('.selected');
    for (const item of li) {
      item.removeAttribute('class');
    }

    target.setAttribute('class', 'selected');
  }
})