var knife ,knifeImage
    var PLAY=1
    var END=0
    var gamestate=1
    var score
    var fruit1,fruit2,fruit3,fruit4;
var monsterImage
    
 function preload() {
   imageofgameover=loadImage("gameover.png")
knifeImage=loadImage("sword.png")
fruit1=loadImage("fruit1.png")
fruit2=loadImage("fruit2.png")
fruit3=loadImage("fruit3.png")
fruit4=loadImage("fruit4.png")
   monsterImage=loadImage("alien1.png")

}
 

function setup(){
  createCanvas(600,600);
  knife= createSprite (40,200,20,20);
  knife.addImage(knifeImage);
  knife.scale=0.7;
  score=0;
  enemyGroup=createGroup();
  fruitGroup=createGroup();
  
   
}

function draw(){
  background("lightblue")
  text("Score="+score,500,50)
        drawSprites();
  fruits();
 enemy();
  knife.x=mouseX
  knife.y=mouseY
  if(gamestate===PLAY){
   fruits();
  enemy();
  if(knife.isTouching(fruitGroup)){
    score=score+1
    fruitGroup.destroyEach()
  }
    if(knife.isTouching(enemyGroup)){
      gamestate===END
    }
  }
  if(gamestate===END){
    knife.destroyEach()
    fruitGroup.destroyEach()
enemyGroup.destroyEach()
    knife.velocityX=0
    knife.velocityY=0
 fruitGroup.velocityX=0
     fruitGroup.velocityY=0
     enemyGroup.velocityY=0
      enemyGroup.velocityX=0
    knife.addImage(imageofgameover)
    knife.x=300
    knife.y=300
  }
}

function fruits(){
  if(frameCount%80 ===0){
    fruit=createSprite(400,200,20,20)
  fruit.scale=0.2
   r=Math.round(random(1,4))
  if(r===1){
    fruit.addImage(fruit1)
  }else if (r===2){
    fruit.addImage(fruit2)
  }else  if(r===3){
    fruit.addImage(fruit3)
  }else  if(r===4){
    fruit.addImage(fruit4)
  }
  
  
    
  
              fruit.y=Math.round(random(50,340))
      fruit.velocityX=-7
      fruit.setLifetime=100
      fruitGroup.add(fruit)}
}
function enemy(){
  if(frameCount%200===0){
    monster=createSprite(400,200,20,20)
    monster.addAnimation("running",monsterImage)
    monster.y=Math.round(random(100,300))
    monster.velocityX=-8
    monster.setLifetime=50
    enemyGroup.add(monster)
    
  }
}
