function openNav() {
  document.getElementById("myNav").style.opacity = "100%";
  document.getElementById("myNav").style.zIndex = 10;

  var ops = document.getElementsByClassName("hb-op");
  var i;
  for (i = 0; i < ops.length; i++) {
    ops[i].style.marginRight = 0;
    ops[i].style.opacity = 1;
  }

}

function closeNav() {
  document.getElementById("myNav").style.transitionDelay = ".3s";
  document.getElementById("myNav").style.opacity = "0%";
  document.getElementById("myNav").style.zIndex = 0;

  var ops = document.getElementsByClassName("hb-op");
  var i;
  for (i = 0; i < ops.length; i++) {
    ops[i].style.marginRight = "5em";
    ops[i].style.opacity = 0;
  }
}
