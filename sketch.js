
var trex ,trex_running; ground
function preload(){
   trex_running=loadAnimation("trex1.png","trex2.png","trex3.png")
 
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(50,150,50,100)
 
 ground=createSprite(200,180,400,20)
}

function draw(){
  background("white")
  

}
