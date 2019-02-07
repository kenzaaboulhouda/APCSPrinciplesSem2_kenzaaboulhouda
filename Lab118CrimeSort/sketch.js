/*
**  BubbleSort Constructor Function
**  Kenza Aboulhouda
** Jan 14, 2019
*/
//bubbleSort
//global variables

//measurements
var data = [];
function preload(){
  data = loadJSON("data.json");
}

function setup() {
  //remove blank black screen
  noCanvas();
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
