console.log("lol")
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {

  document.getElementById("bagg").style.background = "#4B7652";
} else {

  document.getElementById("bagg").style.background = "none";
}
}
