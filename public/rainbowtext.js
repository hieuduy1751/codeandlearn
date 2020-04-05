var rainbowarr = ["r", "a", "i", "n", "b", "o", "w", ""];
var colorrbarr = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "#a800ff",
  "#ba00ff"
];

var keymap = document.getElementsByClassName("key-map")[1];
var rainbowimg = document.querySelector("img[alt='rainbow']");
var rainbowmean = document.getElementsByClassName("rainbow-mean")[0];

var change = 0;
document.addEventListener("keypress", function(event) {
  if (event.key == rainbowarr[change]) {
    document.getElementsByClassName("rainbow-change")[change].style.color =
      colorrbarr[change];
    change++;
    keymap.src = "/Images/" + rainbowarr[change] + "key.png";
    if (change == rainbowarr.length - 1) {
      rainbowimg.style.animationName = "rainbowimg";
      rainbowmean.style.animationName = "appearmean";
    }
  }
});
