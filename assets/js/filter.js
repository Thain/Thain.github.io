

function clickAll() { showVid(); showWeb(); showDes(); }

function clickVid() { showVid(); hideWeb(); hideDes(); }

function clickWeb() { hideVid(); showWeb(); hideDes(); }

function clickDes() { hideVid(); hideWeb(); showDes(); }

function hideVid() {
  var x = document.getElementsByClassName("vid");
  var i;
  for (i = 0; i < x.length; i++) {
    fade(x);
  }
}

function hideWeb() {
  var x = document.getElementsByClassName("web");
  var i;
  for (i = 0; i < x.length; i++) {
    fade(x);
  }
}

function hideDes() {
  var x = document.getElementsByClassName("des");
  var i;
  for (i = 0; i < x.length; i++) {
    fade(x);
  }
}

function showVid() {
  var x = document.getElementsByClassName("vid");
  var i;
  for (i = 0; i < x.length; i++) {
    unfade(x);
  }
}

function showWeb() {
  var x = document.getElementsByClassName("web");
  var i;
  for (i = 0; i < x.length; i++) {
    unfade(x);
  }
}

function showDes() {
  var x = document.getElementsByClassName("des");
  var i;
  for (i = 0; i < x.length; i++) {
    unfade(x);
  }
}

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}
