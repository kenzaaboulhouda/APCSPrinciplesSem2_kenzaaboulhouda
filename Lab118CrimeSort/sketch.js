/*
**  BubbleSort Constructor Function
**  Kenza Aboulhouda
** Jan 14, 2019
*/
//bubbleSort
//global variables

//measurements
var data = [];
var bigTotal = 0;
function preload(){
  data = loadJSON("data.json");
}

function setup() {
  //remove blank black screen
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2,30);
  background(5,5,5);
  bubbleSort(data);
  console.log(data.crime)
}

function draw() {


}

function bubbleSort(data) {
    var length = data.crime.length;
    //number of passes
  //  console.log("i got here, " + length)
    for (var i = 0; i < length; i++) {

        for (var j = 0; j < (length - i - 1); j++) {
            //Compares the adjacent positions
            var a = data.crime[j].Murder;
            var b = data.crime[j+1].Murder;
            if(a > b) {
                //swaps the numbers
                //temperary variables
                var temp = data.crime[j];
                //replace current string with adjacent string
                data.crime[j] = data.crime[j+1];
                //replace adjacent string with current string
                data.crime[j+1] = temp;
            }
        }
    }
}
function represent(){
  for(var i = 1; i < data.crime.length; i++);
  bigTotal = bigTotal+data.crime[i].total;
}
var lastAngle = 0;
for(var i = 0; data.crime.length; i++){
  var angle = ((data.crime[i].total / bigTotal) * (2*PI));
  fill(174, 206, 226*i);
  arc(300, 400, 500, 700, lastAngle, lastAngle, + angle);
  lastAngle += angle

}
