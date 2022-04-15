let imgArrayA = [
      'pictures/4.jpg',
      'pictures/5.jpg',
      'pictures/1.jpg',
      'pictures/6.jpg',
      'pictures/7.jpg'
  ];
  let curIndexA = 0;
  let imgDurationA = 7000;

  function slideShowA() {
      document.getElementById('pf7').src = imgArrayA[curIndexA];
      curIndexA++;
      if (curIndexA == imgArrayA.length) { curIndexA = 0; }
      setTimeout("slideShowA()", imgDurationA);
  }
  slideShowA();
