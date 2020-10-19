function playerControl()
{
        if(keyDown("space") || keyDown(UP_ARROW))
        {

            john.velocityY = -15;
        }
        
        john.velocityY = john.velocityY+0.8;

}

function spawnGrass()
{
    if(frameCount % 100 === 0)
    {
        var grass = createSprite(600,200);
        grass.velocityX = -7;
        grass.y = random(250,300);
        grass.addImage(grassImage);
        grass.scale = 0.6;
        grassGroup.add(grass);
        //grass.debug = true;
        grass.setCollider("rectangle",0,0,400,80);
        grass.lifetime = 86;
    }
}

function spawnFruits()
{
    if(frameCount % 70 === 0)
    {
        var fruit = createSprite(600,200);
        fruit.velocityX = -7;
        fruit.y = random(100,250);
        fruit.scale = 0.2;
        //fruit.debug = true;
        var rand = Math.round(random(1,3));
        fruitGroup.add(fruit);
        switch(rand)
        {
            case 1:fruit.addImage(bananaimg);
            break;
            case 2:fruit.addImage(berryimg);
            break;
            case 3:fruit.addImage(peachimg);
            break;
        } 
        fruit.lifetime = 86;
    }

    if(frameCount % 500 === 0)
    {
        var treasure = createSprite(600,200);
        treasure.velocityX = -9;
        treasure.y = random(150,250);
        treasure.addImage(treasureimg);
        treasureGroup.add(treasure);
        treasure.lifetime = 70;
        treasure.scale = 0.3;
    }
}

function spawnCars()
{
    if(frameCount % 70 === 0)
    {
        var car = createSprite(600,200);
        car.velocityX = -7;
        car.debug = false;
        car.setCollider("rectangle",0,0,100,40);
        
        car.y = random(300,370);
        car.scale = 1;
        //fruit.debug = true;
        var rand = Math.round(random(1,2));
        carsGroup.add(car);
        switch(rand)
        {
            case 1: car.addImage(car1);
            break;
            case 2: car.addImage(car2);
            break;
        } 
        car.lifetime = 86;
    }
    if(john.isTouching(carsGroup))
    {
      end();
    }

  }
function play()
{
    john.collide(grassGroup);
    
  
    if(bg.x < 0)
    {
      bg.x = bg.width/2;
    }

    if(john.x < 0)
    {
      end();
    }

    if(john.isTouching(treasureGroup))
    {
      treasureCount = treasureCount+1;
      treasureGroup.destroyEach();
    }

    if(john.isTouching(fruitGroup))
    {
      fruitGroup.destroyEach();
    }
    bg.visible = true;
    
    playerControl();
    
}

function end()
{
  john.visible = false;
  carsGroup.setVelocityXEach = 0;
  carsGroup.setVelocityYEach = 0;
  bg.visible = false;
  treasureGroup.setVelocityXEach(0);
  fruitGroup.setVelocityXEach(0);
  grassGroup.setVelocityXEach(0);
  treasureGroup.setVisibleEach(false);
  grassGroup.setVisibleEach(false);
  treasureGroup.setVisibleEach(false);
  carsGroup.setVisibleEach(false);
  hi.visible = true;
  textSize = 20;
  text("Game Over",300,200);
}

function start()
{
  background("teal");
  textSize(20);
      text("Press Space to begin",150,100);
      if(keyDown("space"))
      {
        gameState = "play";
      }
}

function level2Start()
{
  background("yellow");
  
  buttonlevel2.visible = true;
  
  treasureGroup.setVelocityXEach(0);
  fruitGroup.setVelocityXEach(0);
  grassGroup.setVelocityXEach(0);

  if(mousePressedOver(buttonlevel2))
  {
    gameState = "level2Game";
    buttonlevel2.visible = false;
  }


  textSize(30);
  fill("black");
  textFont("georgia");
  text("You have crossed level 1",100,100);

  bg.visible = false;
}

function level2Game()
{
  bg.visible = true;
  bg.addAnimation("pic2", level2bgImage); 
  bg.changeAnimation("pic2", level2bgImage);
  bg.y = 80;
  bg.scale = 0.3;
  play();
  spawnCars();
  john.x = 200;
   
  
}