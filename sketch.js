var wall,thickness
var bullet,speed,weight


function setup() {
    createCanvas(1200,500);
  wall=createSprite(1200,200,thickness,height/2);
   

  speed=random(223,321);
  weight=random(30,52);
 thickness=random(22,83)
   
  car=createSprite(60,100,30,20);
  car.shapeColor=color(0,0,0)
  car.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;
    var deformation= 0.5 * weight * speed* speed/22509
  }
  if(deformation>180){
     car.shapeColor=color(255,0,0);
 }
  if(deformation<100){
    car.shapeColor=color(0,255,0);
  }


  drawSprites();
}