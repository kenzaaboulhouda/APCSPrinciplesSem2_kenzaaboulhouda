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
    var length = data.length;
    //number of passes
    for (var i = 0; i < length; i++) {

        for (var j = 0; j < (length - i - 1); j++) {
            //Compares the adjacent positions
            var a = data[j].crimedata.country;
            var b = data[j+1].crimedata.country;
            if(data[j] > data[j+1]) {
                //swaps the numbers
                //temperary variables
                var temp = data[j];
                //replace current string with adjacent string
                data[j] = data[j+1];
                //replace adjacent string with current string
                data[j+1] = temp;
            }
        }
    }
}
