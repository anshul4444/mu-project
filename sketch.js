
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rec1,rec2,rec3,paper,ground,circle1,x

function setup() {
	createCanvas(800, 700);

    var options = {
		isStatic:true
	}
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rec1 = Bodies.rectangle(600,690,300,10,options)
	World.add(world,rec1);

	rec2 = Bodies.rectangle(450,690,10,100,options)
	World.add(world,rec2);

	rec3 = Bodies.rectangle(750,690,10,100,options)
	World.add(world,rec3);

	ground = Bodies.rectangle(10,700,1600,10,options);
	World.add(world,ground);
	
	circle1 = Bodies.circle(110, 610, 40)
	circle1.scale = 0.9;
	World.add(world, circle1);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(rec1.position.x,rec1.position.y,300,10)
  rect(rec2.position.x,rec2.position.y,10,100)
  rect(rec3.position.x,rec3.position.y,10,100)
  ellipseMode(RADIUS)
  ellipse(circle1.position.x,circle1.position.y,40,40)
  rect(ground.position.x,ground.position.y,1600,10)
  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(circle1.body,circle1.body.position,{x:-50,y:-45});

	}
}
