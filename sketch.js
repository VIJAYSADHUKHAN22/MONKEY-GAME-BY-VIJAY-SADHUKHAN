
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);

  monkey=createSprite(75,329,50,20);
  monkey.addAnimation("yes",monkey_running);
  monkey.scale=0.17;
  
  
  obstacle=createSprite(260,348,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.2;
  
  ground=createSprite(400,384,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  SurvivalTime=0;
  bananaGroup=createGroup();
}


function draw() {
  background("lightblue");
  
  
if (ground.x < 0){
      ground.x = ground.width/2;
    }
  stroke("white");
  textSize(20);
  fill("white");
  text("SurvivalTime="+SurvivalTime,300,50);
  
  text("score="+0,100,50);
SurvivalTime=Math.ceil(frameCount/frameRate());
  
  obstacle.velocityX=-6;
  obstacle.lifetime=100;
   if (frameCount % 300 === 0){
    obstacle=createSprite(390,348,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.2;
   }
  
  if(keyDown("space")&&monkey.y >= 50){
    monkey.velocityY=-10;
    
  }
  monkey.velocityY=monkey.velocityY+0.8;
    bananaSpawn();
 
  monkey.collide(ground);

  
  drawSprites();
}
function bananaSpawn(){
  if(frameCount%80==0){
    var banana=createSprite(400,200,20,20);
    banana.addImage(bananaImage);
    banana.scale=0.1;
   banana.y = Math.round(random(80,120));
   banana.velocityX=-4;
   banana.lifetime=100;

    bananaGroup.add(banana);
  }
}





