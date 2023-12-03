function runOnKeys(func, ...codes) {
  let keys = [];

  document.addEventListener('keydown', (e) => {
    keys.push(e.code);

    for (let i = 0; i < codes.length; i++) {
      if (keys.indexOf(codes[i]) === -1) {
        return;
      }
    }
    keys = [];
    func();
  });

  document.addEventListener('keyup', (e) => {
    let index = keys.indexOf(e.code);
    keys.splice(index, 1)
    
  });

}

runOnKeys(
  () => alert("Привет!"),
  "KeyQ",
  "KeyW"
);