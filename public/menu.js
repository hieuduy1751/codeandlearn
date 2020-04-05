var menubutton = document.getElementById("menu-button");
var menutab = document.getElementById("menu-tab");
var mainsnece = document.getElementById("main-snece");

var countclick = 0;
var countmargin = 0;
var countleft = -15;
var speed = 1;
var countwidth = 100;
var working = false;

menubutton.addEventListener("click", function () {
  if (working == false) {
    working = true;
    countclick++;
    if (countclick % 2 == 0) {
      speed = -speed;
    } else if (countclick != 1) {
      speed = -speed;
    }
    var animationmenu = setInterval(function () {
      countmargin += speed;
      countleft += speed;
      countwidth -= speed;
      mainsnece.style.marginLeft = countmargin + "%";
      mainsnece.style.width = countwidth + "%";
      menutab.style.left = countleft + "%";
      if (countmargin == 15 || mainsnece.style.marginLeft == "0%") {
        clearInterval(animationmenu);
        working = false;
      }
    }, 20);
  }
});
