var canvas, backgroundImage;
var cars, car1, car2, car3, car4;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var trackImage, car1Image, car2Image, car3Image, car4Image;

function preload(){
  trackImage= loadImage("trackImage/track.jpg");
  car1Image=loadImage("carImage/car1.png");
  car2Image=loadImage("carImage/car2.png");
  car3Image=loadImage("carImage/car3.png");
  car4Image=loadImage("carImage/car4.png");
  
}


function setup(){
  canvas = createCanvas(displayWidth+500,displayHeight+100);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
