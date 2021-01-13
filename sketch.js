var b1,b2,b3,b4,b5;
var e;
var a,s,d,f,g;
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

	//Create the Bodies Here.
	e=new roof(380,100,450,20);

	b1=new bob(250,450,30);
	b2=new bob(310,450,30);
	b3=new bob(370,450,30);
	b4=new bob(430,450,30);
	b5=new bob(490,450,30);

	a=new thread({x:250,y:100},b1.body);
	s=new thread({x:310,y:100},b2.body);
	d=new thread({x:370,y:100},b3.body);
	f=new thread({x:430,y:100},b4.body);
	g=new thread({x:490,y:100},b5.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#FFFB00");
 
  Matter.Engine.update(engine);
  e.display();
  b1.display();
  b2.display();	
  b3.display();
  b4.display();
  b5.display();

  a.display();
  s.display();
  d.display();
  f.display();
  g.display();

}

function keyPressed()
{
	if(keyCode==UP_ARROW)
	{
		console.log(65);
	Matter.Body.applyForce(b1.body,b1.body.position,{x:-100,y:0});
	}
}

