var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
  box.shapeColor='black';

}

function draw() 
{
   background(30);

  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x +5;
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x= box.position.x -5;
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y - 5;
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.position.y = box.position.y + 5;
  }

  if (keyIsDown(DOWN_ARROW))
  {
    background('yellow');
  }

  if (keyIsDown(UP_ARROW))
  {
    background('red');
  }

  if (keyIsDown(RIGHT_ARROW))
  {
    background('blue');
  }
  if (keyIsDown(LEFT_ARROW))
  {
    background('pink');
  }
  drawSprites();
}




