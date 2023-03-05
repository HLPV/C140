muñeca_derechaY=0;
img="";
lineaY=0;

function preload()
{
  img = loadImage("linea.png");
}

function setup(){
createCanvas(650, 400);
var video=createCapture(VIDEO)
video.size(600,700);
  
  var posenet=ml5.poseNet(video,modelocargado);
  posenet.on("pose",gotposes);
}

function modelocargado(){
  console.log("modelo cargado")
}

function gotposes(result){
  if(result.length>0){
    console.log("poses:"+result)
    muñeca_derecaY=result[0].pose.rightwirst.y
  }
}

function draw() {
  background("#D3D3D3"); 
  if(muñeca_derechaY<150){
    lineaY=lineaY-2
  }
  if(muñeca_derechaY>150){
    lineaY=lineaY+2
  } 
  image(img,marioX, marioY, 40,70);
}


