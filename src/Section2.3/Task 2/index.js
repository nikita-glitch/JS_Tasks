const li = document.querySelectorAll('li')
for (let item of li) {
  const span = document.createElement('span')
  item.prepend(span);
  span.append(span.nextSibling);
}

document.addEventListener('click', function(e){
  if (e.target.tagName != 'SPAN') {
    return;
  }
  let listItem = e.target.parentNode.querySelector('ul');
  
  listItem.hidden = !listItem.hidden;
});
