let imgArray = [
    'pictures/hyrdinden1.jpg',
    'pictures/HC_11.jpg',
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

//der skal laves en + og - regnestykke
//lav en funktion til der læser om regnestykket er størrer eller mindre end facit på regnestykket. 
//mangler loop
//