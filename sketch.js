const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var myEngine,myWorld;
var ground1,ball1;
var chain;
var box10 = [];

function setup() {
  createCanvas(1200,600);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  angleMode(RADIANS);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  
  ground1 = new ground(0,height-100,width+800,10);
  
  ball1 = new ball(300,250,35,35);

  xPos = 550;
  for (j=1;j<4;j++){
    var num = 450;
    for (i = 0; i<8; i++){
      box10.push(new box(xPos,num,50,50));
      num=num-50;
    
  }
  xPos = xPos + 100;
}

chain = new sling(ball1.body,{x: 300, y: 50});
  
}

function draw() {
  background(150);  

  Engine.update(myEngine);
  
  ground1.display();
  ball1.display();

  for (i = 0; i<24; i++){
    box10[i].display();
  }

  chain.display();
    
}

function mouseDragged(){
 Body.setPosition(ball1.body,{x: mouseX,y: mouseY}); 
}

/*function mouseReleased(){
  chain.leave();
}*/