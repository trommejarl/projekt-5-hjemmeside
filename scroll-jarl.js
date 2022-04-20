console.log("js is running..")
mybutton = document.getElementById("toppen");

window.onscroll = function() {scrollFunctionTop()};

function scrollFunctionTop() {
  if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
