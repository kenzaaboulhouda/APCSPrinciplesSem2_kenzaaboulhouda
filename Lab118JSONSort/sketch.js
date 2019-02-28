/*
**  BubbleSort Constructor Function
**  Kenza Aboulhouda
** Jan 14, 2019
*/
//bubbleSort
//global variables

//measurements
var data = [];
var sortBy = "males";
var bigTotal = 0;

function preload(){
  data = loadJSON("data.json");
}

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0, 3, 198);
  fill(255, 255, 255);
  bubble();
  represent();
}

function draw() {
}

function bubble(){
  var temp;
  if(sortBy = "age"){
    for (var i = 1; i < data.countrydata.length; i++){
      for(var j = i; j > 0; j--){
        if(data.countrydata[j].total < data.countrydata[j-1].total){
          temp = data.countrydata[j];
          data.countrydata[j] = data.countrydata[j-1];
          data.countrydata[j-1] = temp;
        }
      }
    }
  }
    if(sortBy = "females"){
      for (var i = 1; i < data.countrydata.length; i++){
        for(var j = i; j > 0; j--){
          if(data.countrydata[j].females < data.countrydata[j-1].females){
            temp = data.countrydata[j];
            data.countrydata[j] = data.countrydata[j-1];
            data.countrydata[j-1] = temp;
          }
        }
      }
    }
    if(sortBy = "males"){
    for (var i = 1; i < data.countrydata.length; i++){
      for(var j = i; j > 0; j--){
        if(data.countrydata[j].males < data.countrydata[j-1].males){
          temp = data.countrydata[j];
          data.countrydata[j] = data.countrydata[j-1];
          data.countrydata[j-1] = temp;
        }
      }
    }
  }
  console.log(data);
}

function represent(){
  for(var i = 1; i < data.countrydata.length; i++){
    bigTotal = bigTotal + data.countrydata[i].total;
  }
  var lastAngle = 0;
  for(var i = 0; i < data.countrydata.length; i ++){
    var angle = ((data.countrydata[i].total / bigTotal) * (2 * PI));
    fill(206, 237, 173*i);
    arc(400, 400, 750, 700, lastAngle, lastAngle + angle);
    lastAngle += angle
  }
}
//end
