let div = document.getElementById("change");

div.addEventListener("click", (e) => {
  let target = e.target;
  let textarea = document.createElement("textarea");
  textarea.innerHTML = target.innerHTML;
  target.replaceWith(textarea);
  textarea.addEventListener("blur", (e) => {
    let div = document.createElement("div");
    div.innerHTML = textarea.innerHTML;
    textarea.replaceWith(div);
  });
  textarea.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      textarea.blur();
      let div = document.createElement("div");
      div.innerHTML = textarea.innerHTML;
      textarea.replaceWith(div);
    }
  });
});
