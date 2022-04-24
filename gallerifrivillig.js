//Javascript af Nikolai//

let imgArray = [
    'pictures/9.jpg',
    'pictures/10.jpg',
    'pictures/11.jpg',
    'pictures/12.jpg',
    'pictures/13.jpg',
    'pictures/14.jpg',
    'pictures/15.jpg',
];
let curIndex = 0;
let imgDuration = 7000;

function slideShow() {
    document.getElementById('gridfri3-pic').src = imgArray[curIndex];
    curIndex++;
    if (curIndex == imgArray.length) { curIndex = 0; }
    setTimeout("slideShow()", imgDuration);
}
slideShow();

//loop i console af Nikolai//

//Loop i console for at have det med//

var s = "";
for(var i = 1; i < 11; i += 1) {
  s += i + " ";
}
console.log(s);
