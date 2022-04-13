var imgArray = [
      'pictures/4.jpg',
      'pictures/5.jpg',
      'pictures/1.jpg',
      'pictures/6.jpg',
      'pictures/7.jpg'
  ];
  var curIndex = 0;
  var imgDuration = 5000;

  function slideShow() {
      document.getElementById('gf1-pic').src = imgArray[curIndex];
      curIndex++;
      if (curIndex == imgArray.length) { curIndex = 0; }
      setTimeout("slideShow()", imgDuration);
  }
  slideShow();
