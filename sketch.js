const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//variables
var ground;
var divisionHeight = 300;

//Arrays
var particles = [];
var plinkos = [];
var divisions = [];



function setup() {
  createCanvas(480,800);
  world = engine.world;

  //making the divisions
  for (var k = 0; k <= width; k = k + 80){
    divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight));
  }
  
}

function draw() {
  background("black");  
 
}