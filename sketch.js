const Render = Matter.Render;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000,700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
groundO = new Ground(width/2, height-35, width,10)
paperO = new Paper(120,600,50)
dustbinO = new Dustbin(700, 600)





var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });


	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background("yellow");



  paperO.display();
  dustbinO.display();

  groundO.display();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperO.body,paperO.body.position,{x:120,y:-120});
	}
}


