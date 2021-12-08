
var trex ,trex_running,clouds,obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6

var ground,groundImage,invisibleGround,cloudImage,obstacle,r

function preload(){

  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")

  groundImage=loadImage("ground2.png")

  cloudImage=loadImage("cloud.png")

  obstacle1=loadImage("obstacle1.png")
  obstacle2=loadImage("obstacle2.png")
  obstacle3=loadImage("obstacle3.png")
  obstacle4=loadImage("obstacle4.png")
  obstacle5=loadImage("obstacle5.png")
  obstacle6=loadImage("obstacle6.png")
  
}

function setup(){

  createCanvas(600,200)

  trex=createSprite(50,130,20,50)
  trex.addAnimation("running",trex_running)
  trex.scale=0.5

  ground=createSprite(200,180,400,20)
  ground.addImage("moving",groundImage)
  ground.velocityX=-4

  invisibleGround=createSprite(200,190,400,10)
  invisibleGround.visible=false
  
}

function draw(){

  background("white")

  if(keyDown("space")){
    trex.velocityY=-10
  }

  trex.velocityY=trex.velocityY+0.8

  if(ground.x<0){
    ground.x=ground.width/2
  }

  trex.collide(invisibleGround)

  spawnClouds()
  spawnObstacles()
  drawSprites()

}

function spawnClouds(){

if(frameCount%60==0){
  clouds=createSprite(600,100,40,10)
  clouds.velocityX=-3
  clouds.lifetime=200
  clouds.addImage(cloudImage)
  clouds.scale=0.4
  clouds.y=Math.round(random(10,120))
  clouds.depth=trex.depth
  trex.depth=trex.depth+1
}

}

function spawnObstacles(){
  if(frameCount%60==0){
    obstacle=createSprite(600,165,10,40)
    obstacle.velocityX=-6
    r=Math.round(random(1,6))
    switch(r){
      case 1:obstacle.addImage(obstacle1)
      break
      case 2:obstacle.addImage(obstacle2)
      break
      case 3:obstacle.addImage(obstacle3)
      break
      case 4:obstacle.addImage(obstacle4)
      break
      case 5:obstacle.addImage(obstacle5)
      break
      case 6:obstacle.addImage(obstacle6)
      break
      default:break
    }
    obstacle.scale=0.5


  }


}

