/*
**  FOOD Constructor Function
**  Kenza Aboulhouda
**  October 4, 2018
*/

//food function
function Food(loc){
  //gives the food a random location
  this.loc = loc;

  this.run = function(){
    this.render();
  }
  //renders the food on the screen
  this.render = function(){
    fill(244, 152, 66);
    stroke(255);
  image(img, this.loc.x, this.loc.y, 40,40);
    stroke(121, 139, 19);
  }
}
