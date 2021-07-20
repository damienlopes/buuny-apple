var garden,rabbit,apple,leaf;
var gardenImg,rabbitImg,appleimg,leafimg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimg = loadImage("apple.png");
  leafimg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
garden=createSprite(200,200);
garden.addImage(gardenImg);

rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX

  leafmaker ()
  applemaker ()
  drawSprites();
}


function leafmaker () {
  if (frameCount % 20 == 0) {
    leaf = createSprite(550, 20, 50, 50);
    leaf.addImage("apppple", leafimg);
    leaf.scale = 0.05;
    leaf.velocityY = 1;
    leaf.x = Math.round(random(400, 0));
  }
}

function applemaker () {
  if (frameCount % 50 == 0) {
    apple = createSprite(550, 20, 50, 50);
    apple.addImage("apppple", appleimg);
    apple.scale = 0.05;
    apple.velocityY = 1;
    apple.x = Math.round(random(400, 0));
    
  }
  
}