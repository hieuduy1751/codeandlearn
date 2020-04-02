var rainbowarr = ["r", "a", "i", "n", "b", "o", "w"];
var colorrbarr = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "#a800ff",
  "#ba00ff"
];

var charr = document.getElementsByClassName("rainbow-change")[0];
var chara = document.getElementsByClassName("rainbow-change")[1];
var chari = document.getElementsByClassName("rainbow-change")[2];
var charn = document.getElementsByClassName("rainbow-change")[3];
var charb = document.getElementsByClassName("rainbow-change")[4];
var charo = document.getElementsByClassName("rainbow-change")[5];
var charw = document.getElementsByClassName("rainbow-change")[6];

var i = 0;
document.addEventListener("keypress", function(event) {
  while (event.key == rainbowarr[i]) {
    "char" + rainbowarr[i] + ".style.color =" + '"' + colorrbarr[i] + '"';
  }
  console.log(i);
});
