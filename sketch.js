var playerImage, player;
var backgroundImg, background;
var ground;
var obstacaleImg;
var coinImg;


function preload(){
playerImage = loadAnimation("a.png","b.png","c.png");

backgroundImg = loadImage("background.jpg");

obstacaleImg = loadImage("Obstacle.png");

coinImg = loadImage("Coin.jpg");

}




function setup(){
  createCanvas(windowWidth, windowHeight)

player = createSprite(windowWidth-1100,windowHeight-120,50,100);
player.addAnimation("Img", playerImage);
player.scale=1.5;


background = createSprite(0,0, windowWidth,windowHeight);
background.scale = 1;
background.addImage(backgroundImg);
background.velocityX = -3;
background.depth = player.depth;
player.depth =  player.depth+1;

background.x = background.width/2;

ground = createSprite(550,650,windowWidth + 2000,10);
ground.velocityX = -3;
ground.x = ground.width/2;


}


function draw(){

  if(background.x < 0){
    background.x = background.width/2;
  }

  if(ground.x < 0){
    ground.x = ground.width/2;
  }

  if(keyDown("space") && player.y >=500 ){
    player.velocityY= -20;

  }
player.velocityY = player.velocityY+0.8;
  player.collide(ground);

spawnObstacles();

  drawSprites();

}

function spawnObstacles(){
  if(frameCount % 100 === 0){

    var obstacle = createSprite(1200,600,40,40);
    obstacle.y= Math.round(random(400,600));
   obstacle.addImage(obstacaleImg);
   obstacle.velocityX = -3;
   obstacle.scale = 0.1;
  }
}