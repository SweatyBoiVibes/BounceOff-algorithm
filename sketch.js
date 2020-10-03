var Game_Object1 
var Game_Object2
var Game_Object3
var Game_Object4 




function setup() {
  createCanvas(800,400);
  moving = createSprite(400, 200, 80, 30);
  fixed = createSprite(200,200, 50, 80);
moving.velocityY = -5;
fixed.velocityY = 5;
  moving.shapeColor = "red"
  fixed.shapeColor = "red"
  moving.debug = true
  fixed.debug = true

  Game_Object1 = createSprite(100,100,50,50);
Game_Object1.shapeColor = "red"

Game_Object2 = createSprite(200,100,50,50);
Game_Object2.shapeColor = "red"

Game_Object3 = createSprite(300,100,50,50);
Game_Object3.shapeColor = "red"

Game_Object4 = createSprite(400,100,50,50);
Game_Object4.shapeColor = "red"


}
function draw() {
  background(255,255,255);  
  moving.x = World.mouseX;
  moving.y = World.mouseY;
 
 if (isTouching(moving,Game_Object4)){
  moving.shapeColor = "blue"
  Game_Object4.shapeColor = "blue"
 }


 else{
  moving.shapeColor = "red"
  Game_Object4.shapeColor = "red" 
    }
    BounceOff(moving, fixed)
  drawSprites();
}
function BounceOff(Object1, Object2)
{

  if (Object1.x - Object2.x < Object2.width/2 + Object1.width/2
    && Object2.x - Object1.x < Object2.width/2 + Object1.width/2) {
      Object1.velocityX = Object1.velocityX * (-1);
      Object2.velocityX = Object2.velocityX * (-1);
}
if (Object1.y - Object2.y < Object2.height/2 + Object1.height/2
  && Object2.y - Object1.y < Object2.height/2 + Object1.height/2){
    Object1.velocityY = Object1.velocityY * (-1);
    Object2.velocityY = Object2.velocityY * (-1);
}

}

//moving = object1