
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;
var boxes=[];

function setup() {
  createCanvas(1200,800);

  engine = Engine.create();
  world = engine.world;
  var option={
    isStatic:true
  };
  ground=Bodies.rectangle(600,780,1200,20,option);
  World.add(world,ground);
box1 = new Box(200,100,50,50);
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}
function mousePressed(){
  boxes.push(   
    new Box(mouseX,mouseY,50,50)  
    
    )
}

function draw() 
{
  background("indigo");
  fill("gold");
  rect(ground.position.x,ground.position.y,1200,15);
  Engine.update(engine);
 for(var i=0;i<boxes.length;i++) {
 boxes[i].show();}
  
  
}

