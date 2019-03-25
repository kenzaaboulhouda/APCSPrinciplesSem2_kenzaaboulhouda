/*
**  Sketch Function
**  Kenza Aboulhouda
**  October 4, 2018
*/
//Global variables
var timer;
var counter = 76;
var seconds, minutes;

function setup() {
  createCanvas(400, 100);
  timer = createP("timer");
  setInterval(timeIt, 1000);
}

function draw() {
  background(220);
}

function timeIt() {
  // 1 counter = 1 second
  if (counter > 0) {
    counter--;
  }

	minutes = floor(counter/60);
  seconds = counter % 60;

  // if (counter < 60)

  timer.html(minutes + ":" + seconds);
}
