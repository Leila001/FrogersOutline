var Player, Sun, pond, lilypad1, lilypad2, lilypad3, dirt, cloud2;

function setup() {
  createCanvas(1000,800);
  Player=createSprite(40, 550, 50, 50);
  Sun=createSprite(   )
  pond=createSprite(500,600,1000,25) 
 lilypad1=createSprite(100,575,50,25)
 lilypad2=createSprite(200,575,50,25)
 lilypad3=createSprite(300,575,50,25)
 dirt=createSprite(800,600,500,25)
 cloud=createSprite(700,200,70,25)
 cloud2=createSprite(700,225,100,25)
}

function draw() {
  background(255,255,255);  
 background("skyBlue")




  if (keyDown("RIGHT_ARROW")){
    Player.x=Player.x+30
  }

  if (keyDown("LEFT_ARROW")){
    Player.x=Player.x-30
  }
Player.shapeColor="red"
Sun.shapeColor="yellow"
pond.shapeColor="teal"
lilypad1.shapeColor="green"
lilypad2.shapeColor="green"
lilypad3.shapeColor="green"
dirt.shapeColor="brown"
cloud.shapeColor="white"
cloud2.shapeColor="white"
  drawSprites();
}