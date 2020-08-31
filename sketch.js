const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var engine,world;
var ground,ball;

function setup() {
 var canvas= createCanvas(400,400);
 // createSprite(200, 200, 50, 50);
  engine=Engine.create();
  world=engine.world;
  console.log("Hello");

  var ground_options ={
    isStatic:true}
  var ball_options={
    restitution:1.0
  }

  ground=Bodies.rectangle(200,390,200,20,ground_options);
  ball=Bodies.circle(200,100,20,ball_options);
  World.add(world,ground);
  World.add(world,ball);
console.log(ground);
console.log(ground.type);
console.log(ground.position.x);
console.log(ground.position.y);
}

function draw() {
  background(0);  
Engine.update(engine);
rectMode(CENTER);
ellipseMode(RADIUS);
rect(ground.position.x,ground.position.y,400,20);
ellipse(ball.position.x,ball.position.y,20,20);


  drawSprites();
}
