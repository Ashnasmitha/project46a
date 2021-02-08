var bgImg,cat,mouse,catRunning,catStanding,catSitting,mousemoving,mouseImg,mouseCollided;
function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png");
    catRunning=loadAnimation("images/cat2.png","images/cat3.png");
    catStanding=loadAnimation("images/cat4.png");
    catSitting=loadAnimation("images/cat1.png")
    mousemoving=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg=loadAnimation("images/mouse1.png");
    mouseCollided=loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(800,600);
    //create tom and jerry sprites here
    cat = createSprite(700,450,100,10);
    cat.addAnimation("cat",catStanding);
    cat.scale=0.2;

    mouse = createSprite(150,450,50,10);
    mouse.addAnimation("mouse",mouseImg);
    mouse.scale=0.13;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)){
        cat.addAnimation("cat",catSitting);
        mouse.addAnimation("mouse",mouseCollided);
        cat.velocityX=0;
        cat.scale=0.15;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      cat.velocityX=-5;
      cat.addAnimation("cat",catRunning);
      mouse.addAnimation("mouse",mousemoving);
  }


}
