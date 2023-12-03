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
  let [input] = document.getElementsByName("text");
  form.addEventListener("submit", (e) => {
    

    let value = input.value;
    if (value == "") {
      return false;
    }

    callback(value);
  });
  form.cancel.onclick = function() {
    formContainer.style.display = 'none';
  };

  document.onkeydown = function(e) {
    if (e.key == 'Escape') {
      formContainer.style.display = 'none';
    }
  };
  let first = form.elements[0];
  let last = form.elements[form.elements.length - 1];
  
  last.onkeydown = function(e) {
    if (e.key == 'Tab' && !e.shiftKey) {
      first.focus();
      return false;
    }
  };

  first.onkeydown = function(e) {
    if (e.key == 'Tab' && e.shiftKey) {
      last.focus();
      return false;
    }
  };
  formContainer.style.display = 'block';
  input.focus();
}
