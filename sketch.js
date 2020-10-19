var gameState = "start";
var treasureCount,fruitGroup,treasureGroup;
var john,johnimg,johnimg2;
var grassImage;
var backgroundImage,bg;
var ground;
var grassGroup,carsGroup;
var treeimg;
var peachimg,bananaimg,berryimg;
var treasureimg;
var buttonlevel2;
var level2bgImage;
var car1, car2,coin1,coin2;
var hi;
function preload()
{
  grassImage = loadImage("green.png");
  backgroundImage = loadAnimation("jungle.jpg");
  level2bgImage = loadAnimation("level2bg.jpg");
  
  johnimg2 = loadImage("john dead.png");
  johnimg = loadAnimation("john (1).png","john (2).png","john (3).png","john (4).png","john (5).png","john (6).png","john (7).png","john (8).png")
  
  peachimg = loadImage("Peach (1).png");
  bananaimg = loadImage("Banana.png");
  berryimg = loadImage("Berries.png");
 
  car1 = loadImage("car1.png");
  car2 = loadImage("car2.png");
  
  treasureimg = loadImage("treasure icon.png");
}

function setup()
{
    createCanvas(600,400);
   
    grassGroup = new Group();
    grassGroup.debugEach = true;
    

    bg = createSprite(300,200);
    bg.addAnimation("pic1",backgroundImage);
    bg.velocityX= -5;
    bg.visible = false;

    john = createSprite(100,250,20,20);
    john.addAnimation("running",johnimg);
    //john.debug = true;

    ground = createSprite(300,400,1200,10);
    ground.visible = false;

    treasureCount = 0;
    treasureGroup = new Group();
    fruitGroup = new Group();
    carsGroup = new Group();
    buttonlevel2 = createSprite(300,250,200,50);
    buttonlevel2.visible = false;

    hi = createSprite(300,0,1000,1200);
    hi.shapeColor = "cyan";
    hi.visible = false;
}

function draw()
{
    background("green");

    if(gameState == "start")
    {
      start();
    }

    else if(gameState == "play")
    {
     play(); 
     spawnGrass();
    spawnFruits();

        if(treasureCount == 1)
        {
          gameState = "level2";
        }
    }
    else if(gameState == "end")
    {
      textSize(50);
      text("You have crossed level 1",200,100);
    }
    else if(gameState == "level2")
    {
      level2Start();
    }
    else if(gameState == "level2Game")
    {
      level2Game();
      ground.height = 30;
      ground.visible = false;
    }

    

    john.collide(ground);
    john.collide(carsGroup);

   
      

   
   drawSprites();
}