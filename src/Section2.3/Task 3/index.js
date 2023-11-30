document.addEventListener("click", function (e) {
  let target = e.target;
  if (target.tagName != "TH") {
    return;
  }
  if (target.dataset.type === Number) {
    sortNumber(target);
  } else {
    sortString(target);
  }
});
function sortString(target) {
  let table = grid.querySelector("tbody");
  let arr = Array.from(table.rows);
  compare = function(rowA, rowB) {
    return rowA.cells[target.cellIndex].innerHTML > rowB.cells[target.cellIndex].innerHTML ? 1 : -1;
  };
  arr.sort(compare);
  table.append(...arr);
}

function sortNumber(target) {
  let table = grid.querySelector("tbody");
  let arr = Array.from(table.rows);
  compare = function(rowA, rowB) {
    return rowA.cells[target.cellIndex].innerHTML - rowB.cells[target.cellIndex].innerHTML;
  };
  arr.sort(compare);
  table.append(...arr);
}

