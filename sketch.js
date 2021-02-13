
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dropArray = []
function preload()
{
	
}

function setup() {
	createCanvas(300, 600);


	engine = Engine.create();
	world = engine.world;

	
		for(var i =0;i<90;i = i+1){
			dropArray.push(new Drop(random(0,300),random(0,600)))
		}
	
	  
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
	
  
  for(var i =0;i<90;i = i+1){
dropArray[i].display()

}


  drawSprites();
 
}



