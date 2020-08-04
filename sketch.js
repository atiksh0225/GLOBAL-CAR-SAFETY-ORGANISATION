var car;
var car1;
var wall;
var wall1;
var speed; var weight;
function preload() {

}


function setup() {
  createCanvas(1199,400);
 speed = random(55, 90);
 weight = random(400, 1500); 




 car = createSprite(70, 200, 100, 50);
 car.velocityX = speed;
 car.shapeColor = "red";

wall = createSprite(1100, 150, 30, height/2);
wall1 = createSprite(1100, 350, 30, height/2);

}

function draw() {
  background(255,255,255);
  rectMode(CENTER);  
   	
 
if(wall.x - car.x < (car.width + wall.width)/2) 
{
car.velocityX = 0;
var deformation = 0.5 * weight * speed * speed/22509;
if(deformation>180)
{
car.shapeColor = color(255, 0, 0);
}
if(deformation < 180 && deformation > 100)
{
car.shapeColor = color(230, 230, 0);	
}
if(deformation < 100)
{
car.shapeColor = color(0, 255, 0);	
}	
}




  drawSprites();
}