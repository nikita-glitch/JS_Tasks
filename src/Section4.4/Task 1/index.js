let formContainer = document.getElementById("prompt-form-container");
let form = document.getElementById("promt-form");
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
    return false;
  });
}
