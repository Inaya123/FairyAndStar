var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var line1,line2;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

	line1 = createSprite(5,530,5,437)
	line2 = createSprite(760,530,240,437)
	line1.visible = false;
	line2.visible = false;


}


function draw() {
  background(bgImg);

  fairy.debug = false;
  fairy.setCollider("circle",10,10,500)

keyPressed();

 star.x = starBody.position.x
 star.y = starBody.position.y

if(star.y > 470 && starBody.position.y > 470 ){
	Matter.Body.setStatic(starBody,true);
	}

	fairy.bounceOff(line1)
	fairy.bounceOff(line2)

  drawSprites();

}

function keyPressed() {
	//write code here

	if(keyDown("left_Arrow")) {
		fairy.x = fairy.x -4;
	}
	if(keyDown("right_Arrow")) {
		fairy.x = fairy.x +4;
	}
	if(keyDown("down_Arrow")) {
		Matter.Body.setStatic(starBody,false);
	}

}
