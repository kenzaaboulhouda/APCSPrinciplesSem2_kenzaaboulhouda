/*
**  ColorBar Constructor Function
**  Kenza Aboulhouda
**  Oct 29, 2018
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
//selectionSort
for (var i = 0; i < arr.length - 1; i++)
        {
            var index = i;
            for (var j = i + 1; j < arr.length; j++)
    if (arr[j] < arr[index])
       index = j;
      		  //  Swapping Code
            var smallerNumber = arr[index];
            arr[index] = arr[i];
            arr[i] = smallerNumber;
        }
