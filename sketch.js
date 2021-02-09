var fixedRect, movingRect;
var gameObject1 ,gameObject2 ;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(200,200,50,70);
  gameObject1.shapeColor = "purple";
  gameObject1.debug = true ;

  gameObject2 = createSprite(400,200,90,110);
  gameObject2 .shapeColor = "orange";
  gameObject2.debug = true;

  gameObject1.velocityX = 2;
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(gameObject1 ,gameObject2)){
gameObject1.shapeColor = "blue";
gameObject2.shapeColor = "blue";
 }
 else{
   gameObject1.shapeColor = "yellow";
   gameObject2.shapeColor = "yellow";
 }

bounceOff(gameObject1 ,gameObject2);
  drawSprites();
}
function isTouching(object1 ,object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  return true;

}
else {
 return false ;
}
}

function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2){
      object1.velocityX = object1.velocityX *(-1);
      object2.velocityX = object2.velocityX *(-1);
    }

    if( object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2 ){
object1.velocityY = object1.velocityY *(-1);
object2.velocityY = object2.velocityY *(-1);
    }

    }

    



