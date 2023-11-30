document.addEventListener("click", (e) => {
  let target = e.target;
  if (!target.closest("a")) {
    return;
  }

  if (!target.getAttribute("href")) {
    if (
      confirm(
        "Leave for " + `${target.closest("a").getAttribute("href")}` + "?"
      )
    ) {
    } else {
      e.preventDefault();
    }
  } else {
    if (confirm("Leave for " + `${target.getAttribute("href")}` + "?")) {
    } else {
      e.preventDefault();
    }
  }
});
