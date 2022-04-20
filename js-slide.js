let imgArray = [
      'pictures/4-1.jpg',
      'pictures/5-1.jpg',
      'pictures/1-1.jpg',
      'pictures/7-1.jpg'
  ];
  let curIndex = 0;
  let imgDuration = 7000;

  function slideShow() {
      document.getElementById('gf1-pic').src = imgArray[curIndex];
      curIndex++;
      if (curIndex == imgArray.length) { curIndex = 0; }
      setTimeout("slideShow()", imgDuration);
  }
  slideShow();
