/*
**  SelectSort Constructor Function
**  Kenza Aboulhouda
** Jan 14, 2019
*/
//selectionSort
//global variables

//measurements
var compares = 0;
var swaps = 0;
//timer
var millisecondEnd;
var milliseondStart;
var difference;
var data = [];
var dataNumbers = 20000
var sorted = [];
//unsorted array
var unsorted = [];

function setup() {
  for(var i = 0; i < dataNumbers; i++){
    data.push(random(0, 2000));
  }
  arrayCopy(data, unsorted, data.length);
  organize()
}

function draw() {
}

function organize(){
  millisecondStart = millis();
  for(var j = 0; j < data.length; j++){
    var min = unsorted[0]
    var minIndex = 0
    for (var i = 1; i < unsorted.length; i++){
      compares++;
      if(unsorted[i] < min){
        minIndex = i;
        min = unsorted[i];
        swaps++;
      }
    }
    sorted.push(min);
    unsorted.splice(minIndex, 1);
  }
  millisecondEnd = millis();
  difference = millisecondEnd - millisecondStart;
  console.log(sorted);
  console.log(millisecondStart + " start");
  console.log(millisecondEnd + " end");
  console.log(difference + " difference");
  console.log(swaps + " swaps");
  console.log(compares + " compares");
}
