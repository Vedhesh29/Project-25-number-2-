
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	dustbinObj=new Dustbin(1150,500);
	paperObject=new Paper(200,450,40);
	groundObject=new Ground(width/2,670,width,20);
	
	//Create a Ground
	

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
  
	  Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
 
  
 
}

 
 


function keyPressed() {
  	//if (keyCode === UP_ARROW) {
		if (keyCode=== UP_ARROW) {

			Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:360,y:-360});
		}
    	//Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:360,y:-360});
    
  	}






/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ball;
var paperObject;
var groundObject;
var dustbin1;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	groundObject = new Ground(width/2,670,width,20);
	paperObject = new Paper(200,450,40);
	dustbin1 = new Dustbin(1200,650);

	var render = Render.create({ element: document.body, engine: engine, options: 
		{ width: 1200, height: 700, wireframes: false } }); 
		Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

 
  dustbin1.display();
  paperObject.display();
  groundObject.display();


  console.log("x"+dustbin1.x);
  console.log("y"+dustbin1.y);
  console.log("width"+dustbin1.width);
  console.log("height"+dustbin1.height);
  

 
}

function keyPressed () {}*/



