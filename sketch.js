var starImg,bgImg;
var star, starBody;
//criar variável para sprite de fada e imgFada
var fada, fadaImg
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    //carregar animação de fada 
    fadaImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
    vozFada = loudSound("JoyMusic.mp3")

}   

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada
    playSound("JoyMusic.mp3")
    //criar sprite de fada e adicionar animação para fada
     var fada=addAnimation(fada)
    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}
 function draw(){
     if(star.y > 470 && starBody.position.y > 470){
         Matter.Body.setStatic(starBody,true);
     }
     
     drawSprites()}
 function keyPressed(){
     if (keyCode === RIGHT_ARROW){
         fada.X=fada.x-20;
     }

     if(keyCode === LEFT_ARROW){
         fada.x=fada.x-20
     }

     if(keyCode === DOWN_ARROW){
         Matter.Body.setStatic(starBody.false);
     }
 }
