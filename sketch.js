
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree,treeImage;
var boy,boyImage;
var mango1,mango2,mango3,mango4,mangoImage;
var stone,stoneImage
var ground;
function preload()
{
	treeImage = loadImage("tree.png");
	boyImage = loadImage("boy.png");
	mangoImage = loadImage("mango.png");
	stoneImage = loadImage("stone.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = createSprite(550,320,70,70);
	mango1 = createSprite(300,300,70,70);
	mango2 = createSprite(550,150,70,70);
	mango3 = createSprite(600,250,70,70);
	mango4 = createSprite(650,300,70,70);
	stone = createSprite(100,450,70,70);
	
	boy = createSprite(150,500,70,70);
	ground = createSprite(400,650,800,10)
	Engine.run(engine);




	
  
}


function draw() {

	rectMode(CENTER);
	background(0);
	Engine.update(engine);

	tree.addImage(treeImage);
	tree.scale = 0.5

	mango1.addImage(mangoImage);
	mango1.scale = 0.1

	mango2.addImage(mangoImage);
	mango2.scale = 0.1

	mango3.addImage(mangoImage);
	mango3.scale = 0.1

	mango4.addImage(mangoImage);
	mango4.scale = 0.1

	stone.addImage(stoneImage);
	stone.scale = 0.050

	boy.addImage(boyImage);
	boy.scale = 0.1

	stone.depth = boy.depth;
	stone.depth = stone.depth +1
	
	if(keyDown("space")){
		stone.velocityX = 5;
		stone.velocityY = -5;
	}

	strokeWeight(4);
	drawSprites();

}



