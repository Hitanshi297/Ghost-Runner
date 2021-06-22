var tower, towerImg;
var door, doorImg, doorsGroup;
var ghost, ghostImg;
var spookySound

function preload (){
  towerImg  = loadImage ("tower.png");
  doorImg = loadImage ("door.png");
   doorsGroup = new Group();
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound ("spooky.wav");
  
} 

function setup (){
  createCanvas (600,600);
  
  spookySound.loop();
  
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
 ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);
  
  
}

function draw (){
  background(0);
  if ( tower.y > 400){
    tower.y = 300;
  }
  if(keyDown("left_arrow")){
    ghost.x = ghost.x-3;
  }
  
  if(keyDown("right_arrow")){
    ghost.x = ghost.x+3;
  }                                   
  if(keyDown("space")){
    ghost.velocityY = -5;
  }
  ghost.velocityY = ghost.velocityY + 0.8;
  
  if(doorsGroup.isTouching(ghost)){
    ghost.velocityY = 0;
  }
  
  
  
  
  
  spawnDoors();
  
  drawSprites();
}
function spawnDoors(){
  if(frameCount % 240===0 ){
    door = createSprite(200,-50);
    door.addImage(doorImg);
    door.x = Math.round(random(120,400));
    door.velocityY = 1;
    door.lifetime = 800;
    doorsGroup.add(door);
  }
}