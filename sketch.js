
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var roof, bob1,bob2,bob3,bob4,bob5;

var object1,object2;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(450,50,500,20);



	bob1=new Bob(350,300,20);				rope1=new Rope(bob1.body, roof.body, bob1.diameter*2, 0);
	
	bob2=new Bob(390,300,20);				rope2=new Rope(bob2.body, roof.body, 40, 0);

	bob3=new Bob(430,300,20);				rope3=new Rope(bob3.body, roof.body, 40, 0);

	bob4=new Bob(471,300,20);				rope4=new Rope(bob4.body, roof.body, 40, 0);

	bob5=new Bob(510,300,20);				rope5=new Rope(bob5.body, roof.body, 40, 0);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

//if(Istouching(bob1.body,bob2.body)){
	//Matter.Bodies.setPosition(bob5.body,{x:50,y:50});
	//Matter.Bodies.applyForce(bob5.body,bob5.body.position,{x:100,y:-100})
//}

/*if(Istouching(bob5.body,bob4.body)){
	Matter.Bodies.setPosition(bob1.body,{x:-50,y:50});
	Matter.Bodies.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50})
}*/

if(bob1.body.position.x-bob2.body.position.x<bob2.body.width/2+bob1.body.width/2){
	Matter.Bodies.setPosition(bob5.body,{x:100,y:-100});
}



	//console.log(bob4.body.position);
 
}

function keyPressed(){
	if(keyCode===LEFT_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:100});
	}
}



/*function Istouching(object1,object2){
if(object1.x-object2.x<object2.width/2+object1.width/2 && 
	object2.x-object1.x<object2.width/2+object1.width/2){
		return true;
	}else{
		return false;
	}
}*/