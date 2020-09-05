x = document.getElementById("all")
x.click();
x.focus();

// filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("proj-prev");
  y = document.getElementsByClassName(c)

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"
  }
  if (c == "all") y = x;
  for (i = 0; i < y.length; i++) {
    y[i].style.display = "block"
  }
}
