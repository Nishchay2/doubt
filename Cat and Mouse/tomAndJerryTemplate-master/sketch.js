var gardenImage
var tom
var jerry

function preload() {
    //load the images here

    gardenImage=loadImage("images/garden.png")
    tom1=loadImage("images/tomOne.png")
    tom2=loadImage("images/tomTwo.png")
    tom3=loadImage("images/tomThree.png")
    tom4=loadImage("images/tomFour.png")
    jerry1=loadImage("images/jerryOne.png")
    jerry2=loadImage("images/jerryTwo.png")
    jerry3=loadImage("images/jerryThree.png")
    jerry4=loadImage("images/jerryFour.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
 tom=createSprite(780,770,50,50)

 jerry=createSprite(670,770,50,50)
 jerry.addImage("jerry1.png")
}

function draw() {

    background(gardenImage);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode===LEFT_ARROW){
jerry.addImage("jerry3.png")

jerry.frameDelay=25
}

}
