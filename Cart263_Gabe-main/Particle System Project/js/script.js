
//fireworks array
const fireworks = [];

//misc vars
let gravity, cam, messi, txt, angleX, angleY, angleZ;


//load la pulga
function preload() {
    messi = loadModel('assets/models/Messi.stl');
    txt = loadModel('assets/models/txt.stl')
}


//setup some varibles and shit
function setup() {
    angleX = 0.7;
    angleY = 0.7;
    angleZ = 0.7;
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB);
  gravity = createVector(0, 0.2);
  stroke(255);
  strokeWeight(4);
  background(0);
}

//take care of fireworks and what they doing
function handleFireworks() {
  if (random(1) < 0.04) {
    fireworks.push(new Firework());
  }
  
  for (let i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}

//display le pulga
function handleMessi() {
    //No one can handle Messi

    push();
 
    rectMode(CENTER);
    rotateY(135);
    rotateX(90);
    rotateZ(angleZ);
    fill(255, 184, 28);
    noStroke();
    scale(400);
    model(messi);
    pop();

    push();
    noStroke();
    fill(255, 184, 28);
    translate(-775, 200, -100);
    rotateX(-160);
    scale(4);
    model(txt);

    pop();


    angleZ += 0.009;
}

//draw the light thingy, do the cam setup and handle messi (you cant) and the fireworks functions
function draw() {
    colorMode(RGB);
    background(0, 0, 0);
  
    pointLight(255, 255, 255, 400, 200, 700);
    pointLight(255, 255, 255, 400, 400, -700);

    cam = createCamera();
    cam.move(0, 300, 900);
    cam.tilt(-0.3);
  
    handleMessi();
    handleFireworks();
  
  
  
}