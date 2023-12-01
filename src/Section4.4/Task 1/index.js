let formContainer = document.getElementById("prompt-form-container");
let form = document.getElementById("prompt-form");
let formText = document.getElementById("prompt-message");
formContainer.hidden = true;
let button = document.createElement("button");
button.innerHTML = "click";
document.body.append(button);

button.addEventListener("click", (e) => {
  formContainer.hidden = false;

  showPrompt("Введите что-нибудь<br>...умное :)", function (value) {
    alert(value);
  });
});
function showPrompt(line, callback) {
  formText.innerHTML = line;
  form.addEventListener("submit", (e) => {
    let [input] = document.getElementsByName("text");

    let value = input.value;
    if (value == "") {
      return false;
    }

    callback(value);
  });
}
let length = form.elements.length - 1;
let first = form.elements[0]
let last = form.elements[length]
first.onkeydown = (e) => {
  if ( e.key == 'Tab' && !e.shiftKey) {
    first.focus();
    return false;
  } 
}
last.onkeydown = (e) => {
  if((e.key == 'Tab' && e.shiftKey)) {
    last.focus();
    return false;
  }
}