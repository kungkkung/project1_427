let shrimpImg, panImg;
let sizzleSound, dingSound;
let angle = 0;
let clickCount = 0;
let speed = 1;
let state = 0;

let textContainer, mainText, subText;

function preload() {
  shrimpImg = loadImage('pics/shrimp.png'); 
  panImg = loadImage('pics/pan.png'); 
  sizzleSound = loadSound('sizzle.wav'); 
  dingSound = loadSound('ding.wav'); 
}

function setup() {
  createCanvas(600, 600); 
  imageMode(CENTER);
  textFont('EB Garamond');
  fill("#FFD558");
  

  textContainer = createDiv();
  mainText = createDiv("RICE FRIED");
  subText = createDiv("You have now earned a free coupon for me to make fried rice for dinner.");
  
  textContainer.child(mainText);
  textContainer.child(subText);
  
  textContainer.style("background-color", "rgba(0, 0, 0, 0.7)"); 
  textContainer.style("display", "inline-block");
  textContainer.style("position", "absolute");
  textContainer.style("width", "600px");

  mainText.style("font-size", "90px");
  mainText.style("color", "#FFD558");
  mainText.style("text-align", "center");
  subText.style("font-size", "16px");
  subText.style("color", "#FFD558");
  subText.style("text-align", "center");

  //hide text
  textContainer.style('display', 'none');
  
  // Position the container within the canvas
  textContainer.position(0,250);
}

function draw() {
  background("#FFE1D3");
  
  //shrimp
  image(shrimpImg, 340, 270, 460, 248); 
  
  //pan
  push();
  translate(300, 250); 
  rotate(radians(angle));
  image(panImg, -100, 80, 407, 246);
  pop();
  
  if (clickCount >= 15) {
    textContainer.style('display', 'block');  }
}

function mousePressed() {
  if (clickCount < 15) {
    clickCount++;
    if (clickCount < 15) {
      sizzleSound.play();
    }
    
    if (state === 0) {
      angle = 18;
      state = 1;
    } else if (state === 1) {
      angle = -10;
      state = 2;
    } else {
      angle = 0;
      state = 0;
    }
    
    speed *= 0.95; 
  } 
  
  if (clickCount === 15) {
    sizzleSound.stop(); 
    dingSound.play();
  }
}
