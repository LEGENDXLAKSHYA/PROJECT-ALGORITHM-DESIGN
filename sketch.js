function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(200, 200, 50, 50);
  movingrect=createSprite(200,100,70,40);
  fixedrect.shapeColor = "green";
  movingrect.shapeColor="green";
  box1=createSprite(200,50,70,40);
  box1.shapeColor="red";
  box1.velocityX= 4;
  box2=createSprite(600,50,70,40);
  box2.shapeColor="cyan";
  box2.velocityX= -4;
}

function draw() {
  background(0);  
  movingrect.x=mouseX;
  movingrect.y=mouseY;

  if(movingrect.x-fixedrect.x<=movingrect.width/2+fixedrect.width/2&&
    fixedrect.x-movingrect.x<=movingrect.width/2+fixedrect.width/2&&
    movingrect.y-fixedrect.y<=movingrect.height/2+fixedrect.height/2&&
    fixedrect.y-movingrect.y<=movingrect.height/2+fixedrect.height/2){
    fixedrect.shapeColor = "blue";
    movingrect.shapeColor="blue";
  }
  else{
    fixedrect.shapeColor = "green";
    movingrect.shapeColor="green";
  }
  if(box1.x-box2.x<=box1.width/2+box2.width/2&&
    box2.x-box1.x<=box1.width/2+box2.width/2){
      box1.velocityX=-1*box1.velocityX;
      box2.velocityX=-1*box2.velocityX;
    }
  if(box1.y-box2.y<=box1.height/2+box2.height/2&&
    box2.y-box1.y<=box1.height/2+box2.height/2){
      box1.velocityY=-1*box1.velocityY;
      box2.velocityY=-1*box2.velocityY;
    }
  drawSprites();
}