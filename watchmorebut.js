var watchmorebut = document.getElementById("watch-more-but");
var gototop = document.getElementById("go-to-top");
var n = 2;
watchmorebut.addEventListener("click", function() {
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
