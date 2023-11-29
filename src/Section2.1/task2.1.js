
const button = document.createElement('button');
const input_focus = document.createElement('input');
const input_text = document.createElement('input');
const button_text = document.createElement('button');

button_text.innerHTML = 'опубликовать';
button.innerHTML = 'button';
document.body.append(button);
document.body.append(input_focus);
document.body.append(input_text);
document.body.append(button_text);
let text;
input_text.addEventListener("input", inputHandler);

function inputHandler(e) {
  text = e.target.value;
  
}
button_text.addEventListener("click", () => {
  button_text.innerHTML = text;
}) 
button.onclick = () => alert('уря');
input_focus.onblur = () => alert('ждем возвращения') ;