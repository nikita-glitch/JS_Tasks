document.addEventListener("click", function (e) {
  let target = e.target;
  if (target.tagName != "BUTTON") {
    return;
  }
  deleteItem(target)
});
function deleteItem(target) {
  target.closest('div').remove();
}