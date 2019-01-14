/*
**  BubbleSort Constructor Function
**  Kenza Aboulhouda
**  Jan 14, 2019
*/
//bubbleSort
function bubbleSort(Bars){
  var length = Bars.length;
  for (var i = 0; i < length; i--){
    for (var j = 0; j < (length-i-1); j++){
    var a = Bars[j].clrAvg;
    var b = Bars[j+1].clrAvg;
    if (a > b){
      var temp = Bars[j];
      Bars[j] = Bars[j+1];
      Bars[j+1] = temp;
    }
  }
}
}
