/*
**  Sketch Function
**  Kenza Aboulhouda
**  October 4, 2018
*/
//Global variables
var snake;
var food = [];
var numSeg = 1;
var start = "true"
var font;
var score = 0;
var timeRemaining;

//standarn setup
function setup(){
  textAlign(CENTER, CENTER);
  //new framerate
  frameRate(10);
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(70, 200, 30);
  loadSnake();
  loadFood(30);
  loadFood(100);
  img= loadImage("mouse.png");
  img2 = loadImage("snake.png");
  //load in 100 food and have it become depleted
}
//draw functions
function draw(){
  background(255, 255, 255);
  snake.run();
  //score count
  textSize(50);
  text("score: " + score, 120, 50)
  noStroke();
  Score();
  //calls for food function
  for(var i = 0; i < food.length; i++){
    food[i].run();
    //timer function
    textAlign(700, 100);
    textSize(50);
  }
  //fucntions
  checkLoc();
  deadGame();
  gameStart();
  Score();
  snake.timer();
}
//checking location of the food
function checkLoc(){
  for(var i = 0; i < food.length; i++){
    var distX = food[i].loc.x - snake.loc.x;
    var distY = food[i].loc.y - snake.loc.y;
    if(distX == (0) && distY == (0)){
      //removes the food
      food.splice(i, 1);
      loadFood(0);
      snake.segments.push(createVector(0, 0));
      console.log(snake.segments.length)
      score++;
    }
  }
}
//snake function call
function loadSnake(){
  var loc = createVector(200, 200);
  var vel = createVector(0, 0);
  snake = new Snake(loc, vel);
}
//loading food into the canvas
function loadFood(numFood){
  for(var i = 0; i < numFood; i++){
    var min = 1;
    //40 * 20 = 800
    var max = 39;
    var locX = (Math.floor(Math.random() * (max - min + 1) + min)) * 20;
    var locY = (Math.floor(Math.random() * (max - min + 1) + min)) * 20;
    var loc = createVector(locX, locY);
    var f = new Food(loc);
    food.push(f);
  }
}
//controls for the snakes direction
function keyPressed(){
  start = "false"
  if(keyCode === 38){
    snake.vel = createVector(0, -20)
  }
  if(keyCode === 40){
    snake.vel = createVector(0, 20)
  }
  if(keyCode === 39){
    snake.vel = createVector(20, 0)
  }
  if(keyCode === 37){
    snake.vel = createVector(-20, 0)
  }
}
//game over function
function deadGame(){
  if(snake.status == "true"){
    start = "false";
    snake = 0
    score = 0;
    text("you're not too good at this", 400, 400);
  text("refresh to start again", 400, 500);
    //loadSnake();
  //  gameStart();
    //gameover();

  }
}
//pop up page of the beginning of the game
function gameStart(){
  if(start == "true"){
    background(208, 220, 239);
    textFont()
    // fill(182, 219, 198);
    // rect(225, 300, 350, 200);
    // fill(239, 239, 230);
    // rect(240, 315, 320, 170)
    // fill(150, 200, 70);
    textAlign(CENTER);
    textSize(47);
    text("SnaKe GAng", 400, 435)
    text("press any arrow key to start", 400, 250)
  }
}
//score function with win function as well.
function Score(){
  if (score > 99){
    fill(255, 0, 5);
    textAlign(CENTER);
    text("good job", 400, 400);
  }
  text(snake.timeRemaining, 0, 100, 1450);
  noStroke();
  if (snake.timeRemaining === 0){
    snake.status = "true";
    deadGame();
  }
}
