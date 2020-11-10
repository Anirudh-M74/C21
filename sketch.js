var movingrect;
var standingrect;
var object101;
var object205;
function setup() {
  createCanvas(800,400);
object101=createSprite(80,400,20,20);
object205=createSprite(400,400,80,40);
object101.velocityX=1;
object205.velocityX=-1;
  movingrect=createSprite(400, 200, 50, 50);
  standingrect=createSprite(200,200,50,50)
}

function draw() {
  background(0);  
  
  movingrect.x=mouseX;
  movingrect.y=mouseY;
 if(isTouching(object101,object205)){
   object101.shapeColor="red"
   object205.shapeColor="red"
 }
 bounceOff(object101,object205)

  drawSprites();
}