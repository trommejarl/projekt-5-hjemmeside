//Javascript af Nikolai//

let imgArray = [
    'pictures/hyrdinden1.jpg',
    'pictures/hcanden.jpg',
    'pictures/5.jpg',
    'pictures/6.jpg',
    'pictures/7.jpg'
];
let curIndex = 0;
let imgDuration = 7000;

function slideShow() {
    document.getElementById('gridf3-pic').src = imgArray[curIndex];
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

