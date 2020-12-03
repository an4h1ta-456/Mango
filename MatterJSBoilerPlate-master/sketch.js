
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy1, tree1, ground1, stone1, launcher;
var mango1, mango2, mango3, mango4, mango5, mango6;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	tree1 = new Tree(600,300,300,500);
	ground1 = new Ground(400,700,800,50);
	stone1 = new Stone(200,560);
	boy1 = new Boy(200,550);
	launcher = new Connect(stone1.body,{x:127,y:500});

	mango1 = new Mangoes(600,200);
	mango2 = new Mangoes(610,300);
	mango3 = new Mangoes(700,210);
	mango4 = new Mangoes(630,300);
	mango5 = new Mangoes(620,250);
	mango6 = new Mangoes(650,230);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  tree1.display();
  ground1.display();
  stone1.display();
  boy1.display();
  launcher.display();
  
  detectCollision(stone1, mango1);
  detectCollision(stone1, mango2);
  detectCollision(stone1, mango3);
  detectCollision(stone1, mango4);
  detectCollision(stone1, mango5);
  detectCollision(stone1, mango6);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===32){
		Matter.Body.setPosition(stone1.body, {x:235, y:420})
		
	}


}

function detectCollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function mouseDragged(){
Matter.Body.setPosition(stone1.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
launcher.fly();
}


