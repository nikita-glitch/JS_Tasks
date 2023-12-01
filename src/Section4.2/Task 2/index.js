let table = document.getElementById("bagua-table");
let isEdit = false;
document.addEventListener("click", (e) => {
  let target = e.target;
  let textarea = document.createElement("textarea");
  let className = target.getAttribute("class");
  let okButton = document.createElement("button");
  let cancelButton = document.createElement("button");
  let content = target.innerHTML;

  console.log(target.tagName);

  if (target.tagName === "TD") {
    if (isEdit) {
      return;
    }
    isEdit = true;
    textarea.value = target.innerHTML;
    content = target.innerHTML;
    target.replaceWith(textarea);
    okButton.innerHTML = "OK";
    cancelButton.innerHTML = "Cancel";
    document.body.append(okButton);
    document.body.append(cancelButton);
    textarea.focus();
    document.addEventListener("click", (e) => {
      if (e.target.innerHTML === "OK") {
        let td = document.createElement("td");
        td.setAttribute("class", className);
        td.innerHTML = textarea.value;
        textarea.blur();
        okButton.remove();
        cancelButton.remove();
        okButton = null;
        cancelButton = null;
        textarea.replaceWith(td);
        isEdit = false;
      } else if (e.target.innerHTML === "Cancel") {
        let td = document.createElement("td");
        td.setAttribute("class", className);
        td.innerHTML = content;
        textarea.blur();
        okButton.remove();
        cancelButton.remove();
        okButton = null;
        cancelButton = null;
        textarea.replaceWith(td);
        isEdit = false;
      } else {
        let td = document.createElement("td");
        td.setAttribute("class", className);
        td.innerHTML = content;
        okButton.remove();
        cancelButton.remove();
        okButton = null;
        cancelButton = null;
        textarea.replaceWith(td);
        isEdit = false;
      }
    });
  }
}); //????
