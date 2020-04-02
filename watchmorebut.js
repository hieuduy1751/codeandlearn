var watchmorebut = document.getElementById("watch-more-but");
var gototop = document.getElementById("go-to-top");
var n = 2;
watchmorebut.addEventListener("click", function() {
  textfunc.style.animationName = "typeandlearn";
  textfunc1.style.animationName = "typeandlearn";
  trytext.style.animationName = "typeandlearn";
  keyboardmain.style.animationName = "keyboardmain";
  rainbowtext.style.animationName = "rainbowtext";
  watchmorebut.href = "#background" + n;
  n++;
  if (n == 5) {
    n = 2;
    gototop.style.display = "unset";
    watchmorebut.style.display = "none";
  }
});
gototop.addEventListener("click", function() {
  gototop.style.display = "none";
  watchmorebut.style.display = "unset";
});

var textfunc = document.getElementsByClassName("text-func")[0];
var textfunc1 = document.getElementsByClassName("text-func")[1];
var trytext = document.querySelector("#keyboard-main + p");
var keyboardmain = document.getElementById("keyboard-main");
var rainbowtext = document.getElementById("rainbow-text");
