var backgroundImg
var cashImg
var thiefImg
var player1,player_running;
var score;
var PLAY=1;
var END=0;
var gameState=PLAY;


function preload(){
player_running=loadAnimation("sprites/player_3_1.png")
thiefImg=loadImage("sprites/thief1.png")
cashImg=loadImage("sprites/cash1.png")
backgroundImg=loadImage("sprites/forestpathbg2ndimg.jpg")
}

function setup() {
  createCanvas(1800,1400);
  bg=createSprite(450,350)
  bg.addImage("background",backgroundImg)
  bg.y = bg.height/2;
  player1=createSprite(400, 700, 50, 50);
  player1.addAnimation("running",player_running)
  player1.velocityY=-5;
  thiefGroup=new Group();
 cashGroup=new Group();
 bg.velocityY=-7;
  //background.addImage("background","backgroundImg")
 // background.y=backgorund.height/2;
}

function draw() {
//   background(backgroundImg)
   if(gameState===PLAY){
    if(keyDown("leftArrow")){
      player1.velocityX=-5;
      player1.velocityY=5;
    }
    if(keyDown("rightArrow")){
      player1.velocityX=5;
      player1.velocityY=5;
    }
   
   if(thiefGroup.isTouching(player1)){
     gameState=END
   }

   if (bg.y < 0){
    bg.y = 350;
  }
  

  }
  drawSprites();
  createThief()
  createCash()
}

function createThief(){
  thief=createSprite(400,400,50,50);
  thief.addImage("thief",thiefImg)
  thief.scale=0.3
thiefGroup.add(thief)
}

function createCash(){
  cash=createSprite(400,500,30,30)
  cash.addImage("cash",cashImg)
  cash.scale=0.4
  cashGroup.add(cash)
}