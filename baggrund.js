window.onscroll = function() {scrollFunction(); scrollFunctionTop()};
function scrollFunction() {
if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
  document.getElementById("bagg").style.background = "#4B7652";
} else {
  document.getElementById("bagg").style.background = "none";
}
}

let mybutton = document.getElementById("toppen");


function scrollFunctionTop() {
  if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

for (let i = 0; i < 5; i++){
  console.log("Dette er et loop", i);
}
