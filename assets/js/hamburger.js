function openNav() {
  document.getElementById("navContainer").style.opacity = "100%";
  document.getElementById("navContainer").style.zIndex = 500;
  document.getElementById("navContainer").style.overflow = "hidden";
  document.getElementById("navContainer").style.pointerEvents = "auto";
}

function closeNav() {
  document.getElementById("navContainer").style.opacity = "0%";
  document.getElementById("navContainer").style.zIndex = 0;
  document.getElementById("navContainer").style.pointerEvents = "none";
}
