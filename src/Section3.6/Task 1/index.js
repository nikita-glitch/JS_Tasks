function func() {
  while (true) {
    let bot = document.documentElement.getBoundingClientRect().bottom;
    if (bot > document.documentElement.clientHeight + 50) {
      break;
    }
      let div = document.createElement("div");
      div.innerHTML = Date.now()
      document.body.append(div);
    
  }
}
document.addEventListener('scroll', func);
func()