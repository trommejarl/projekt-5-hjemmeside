// Indsæt dato der tælles ned til
var nedtællingsDato = new Date("May 13, 2022 12:00:00").getTime();

// opdatere nedtællingen hvert sekund
var x = setInterval(function() {

  // henter dags dato
  var nu = new Date().getTime();

  // finder "distance" fra "nedtællingsDato" til "nu"
  var distance = nedtællingsDato - nu;

  // udregner dage, timer, minutter, sekunder
  var dage = Math.floor(distance / (1000 * 60 * 60 * 24));
  var timer = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutter = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var sekunder = Math.floor((distance % (1000 * 60)) / 1000);

  // viser resultatet i elementet med id="timer"
  document.getElementById("timer").innerHTML = dage + "d " + timer + "t "
  + minutter + "m " + sekunder + "s ";

  // når timeren udløber skifter den tælleren til knap
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
    }
  }, 1000);
