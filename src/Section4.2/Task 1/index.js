let div = document.getElementById("change");

div.addEventListener("click", (e) => {
  let target = e.target;
  let textarea = document.createElement("textarea");
  textarea.value = target.innerHTML;
  target.replaceWith(textarea);
  textarea.addEventListener("blur", (e) => {
    let div = document.createElement("div");
    div.setAttribute('class', 'change');
    div.innerHTML = textarea.value;
    textarea.replaceWith(div);
  });
  textarea.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
    console.log(textarea.value);
    let div = document.createElement("div");
    div.setAttribute('class', 'change');
    div.innerHTML = textarea.value;
    textarea.replaceWith(div);
    textarea.blur();
    }
  });
});
