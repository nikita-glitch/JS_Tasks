document.addEventListener('click', function(e){
  let target = e.target;
  if (target.tagName != 'TH') {
    return;
  }
  console.log(target.dataset.type);
  if (target.dataset.type === number) {
    
  } else {
    
  }
})