/*var paper, line1, line2, line3
var line1body, line2body, line3body
var page_options, paperBody

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	line1=createSprite(400,650,200,20);
	line1.shapeColor = "red"
	line2=createSprite(300,610,20,100);
	line2.shapeColor = "red"
	line3=createSprite(500,610,20,100);
	line3.shapeColor = "red"

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	page_options = {
		
		isStatic: false,
		restitution:0.3,
		friction: 0.5,
		density: 1.2
	  }

	  paper=createSprite(20,660,40,40);

	myengine = Engine.create();
	myworld = myengine.world;

	//Create the Bodies Here.

	paperBody = Bodies.circle(20 , 660 , 40 , {restitution:0.5, isStatic:true, density:1.2});
	World.add(myworld, paperBody);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(myworld, ground);

	 line1body = Bodies.rectangle(400,650,200,20,{isStatic:true})
	World.add(myworld, line1body);

	line2body = Bodies.rectangle(300,610,20,100,{isStatic:true})
	World.add(myworld, line2body);

	line3body = Bodies.rectangle(500,610,20,100,{isStatic:true})
	World.add(myworld, line3body);

	//Engine.run(myengine);
  
}


function draw() {

  Engine.update(myengine)
  rectMode(CENTER);
  background(0);
  
  paper.x = paperBody.position.x
  paper.y = paperBody.position.y

  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
		  console.log("hi")
		 Matter.Body.applyForce(paperBody,paperBody.position,{x:85, y:-85})
		
		  
	   
	 }

	} */











/*	var paper, line1, line2, line3
	var line1body, line2body, line3body
	var page_options, paperBody

	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;


	function preload()
	{
	
	}


	function setup() {
	createCanvas(800, 500);
	rectMode(CENTER);


	line1=createSprite(400,650,200,20);
	line1.shapeColor = "red"
	line2=createSprite(300,610,20,100);
	line2.shapeColor = "red"
	line3=createSprite(500,610,20,100);
	line3.shapeColor = "red"
	
	myengine = Engine.create();
	myworld = myengine.world;
	//Create the Bodies Here.
	paperBody = Bodies.circle(20 , 400 ,20, {restitution:0.5,density:1.2});
	World.add(myworld, paperBody);

	ground = Bodies.rectangle(width/2, height-35, width, 10 , {isStatic:true});
	 World.add(myworld, ground);

	line1body = Bodies.rectangle(400,450,200,20,{isStatic:true})
	World.add(myworld, line1body);

	line2body = Bodies.rectangle(300,410,20,100,{isStatic:true})
	World.add(myworld, line2body);

	line3body = Bodies.rectangle(500,410,20,100,{isStatic:true})
	World.add(myworld, line3body);

	

	//Engine.run(myengine);
  
}
function draw() {
  
  background(0);
  Engine.update(myengine)
   
  
  ellipseMode(RADIUS)
  ellipse(paperBody.position.x,paperBody.position.y,20,20)
  console.log(paperBody.position.x,paperBody.position.y)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,width,10)
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		  console.log("hi")
		 Matter.Body.applyForce(paperBody,paperBody.position,{x:85, y:-85})		 
	 }
	} */


	const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(100,80,40);

	dustbin = new dustbin(660,600);
	ground1 = new ground(400, 680, 800, 10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  dustbin.display();
  paper1.display();
 
  ground1.display();
  drawSprites();
 
}


function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position,{x:60, y:-73})
	}
}
