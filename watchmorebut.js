var textfunc = document.getElementsByClassName("text-func")[0];
var textfunc1 = document.getElementsByClassName("text-func")[1];
var trytext = document.querySelector("#keyboard-main + p");
var keyboardmain = document.getElementById("keyboard-main");
var rainbowtext = document.getElementById("rainbow-text");

var textfuncr3 = document.getElementsByClassName("text-func-right-3")[0];
var textfuncl3 = document.getElementsByClassName("text-func-left-3")[0];

var imgspeedo = document.querySelector("img[alt='speedometer']");
var imgukflag = document.querySelector("img[alt='ukflag']");

var pleftbg31 = document.querySelector("img[alt='speedometer'] + p ");
var pleftbg32 = document.querySelector("img[alt='speedometer'] + p + p");

var prightbg31 = document.querySelector("img[alt='ukflag'] + p");
var prightbg32 = document.querySelector("img[alt='ukflag'] + p + p");

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
  if (n == 4) {
    textfuncr3.style.animationName = "textfunc3";
    textfuncl3.style.animationName = "textfunc3";
    imgspeedo.style.animationName = "imgbg3";
    imgukflag.style.animationName = "imgbg3";
    pleftbg31.style.animationName = "textdes3";
    pleftbg32.style.animationName = "textdes3";
    prightbg31.style.animationName = "textdes3";
    prightbg32.style.animationName = "textdes3";
  }
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
