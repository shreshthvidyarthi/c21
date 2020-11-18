
var bullet  , wall ;
var speed , weight ;
var deformation , thickness;



function setup() {
  createCanvas(1600,400);
 
 thickness= random(22,83);
  bullet  = createSprite(50, 200, 50, 50);
 wall = createSprite(1400,200,thickness,height/2);
 speed=random(223,321);
 weight = random(30,52);
 bullet .velocityX = speed;

 


}

function draw() {
   background("black");
  
  if(wall.x-bullet .x <(bullet .width+wall.width)/2 ){
    

    bullet .velocityX=0;
     var deformation = 0.5 * weight * speed * speed/22509;
     if(speed>180){ 
      bullet .shapeColor=color(255,0,0);
       
     }
    if(speed<180 && speed>100){
   
      bullet .shapeColor=color(230,230,0);
    
   }
    if(speed<100){
   
      bullet .shapeColor=color(0,255,0);
     
   }

}

drawSprites();
}

