var bg,sleep, brush, gym, eat, bath, move;
var astronaut;

function preload(){
 bg = loadImage("images/iss.png");
 sleep = loadImage("images/sleep.png");
 brush = loadImage("images/brush.png");
 gym = loadAnimation("images/gym11.png","images/gym12.png");
 eat = loadAnimation("images/eat1.png","images/eat2.png");
 drink = loadAnimation("images/drink1.png","images/drink2.png");
 move = loadAnimation("images/move1.png","images/move2.png")
 bath = loadAnimation("images/bath1.png","images/bath2.png")
}

function setup() {
  createCanvas(600, 500);
  
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
  
}

function draw() {
  background(bg);
  drawSprites();

  textSize(20);
  fill("white")
  text("Instructions:",20, 35);
  textSize(15);
  text("Up Arrow = Brushing",20, 55);
  text("Down Arrow = Gymming",20, 70);
  text("Left Arrow = Eating",20, 85);
  text("Right Arrow = Bathing",20, 100);
  text("m key = Moving",20, 115);
  
  edges=createEdgeSprites();
  astronaut.bounceOff(edges);
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
 if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("Gymming",gym)
    astronaut.changeAnimation("Gymming")
    astronaut.y = 350
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
 }

 if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("Eating",eat)
  astronaut.changeAnimation("Eating")
  astronaut.y = 350
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("Bathing",bath)
  astronaut.changeAnimation("Bathing")
  astronaut.y = 350
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if(keyDown("m")){
  astronaut.addAnimation("Moving",move)
  astronaut.changeAnimation("Moving")
  astronaut.y = 350
  astronaut.velocityX = 2;
  astronaut.velocityY = 2;
}


}
