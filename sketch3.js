const urlString = window.location.href; // Collect the URL string of the page
let url = new URL(urlString); // Convert it into a parsable URL Object

//variables are declared
let container, counterP, counterP2;
let canzonedisfondo;

//variables relative to the generative art
const num = 720;
//The Float32Array typed array represents an array of 32-bit floating point numbers
const x = new Float32Array(num);
const y = new Float32Array(num);
const vx = new Float32Array(num);
const vy = new Float32Array(num);
const maxDistSq = 20 ** 2;
const minDistSq = 16 ** 2;

//sound is loaded
function preload() {
  canzonedisfondo = loadSound("assets/Alberto Balsalm.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES);
  rectMode(CENTER);

  //cycle
  for (let i = num; i--; ) {
    const a = i / 2;
    vx[i] = cos(a);
    vy[i] = sin(a);
    x[i] = width / 2 + (vx[i] * width) / 2;
    y[i] = height / 2 + (vy[i] * height) / 2;
  }

  //create BUTTON FOR 'INDEX' PAGE
  container = createElement("div");
  var button = createButton("");
  button.id(button1);
  counterP = createP();
  //moving elements in the DOM strucure
  container.child(button1);
  counterP.parent(container);
  //define the features of the button
  container.size(100, 50);
  container.position(50, 50);
  container.mousePressed(returnIndex);

  //create BUTTON FOR 'DISCOVER' PAGE - relative to learn
  container = createElement("div");
  var button = createButton("");
  button.id(button2);
  counterP2 = createP();
  //moving elements in the DOM structure
  container.child(button2);
  counterP2.parent(container);
  //define features of the button
  container.size(100, 50);
  container.position((width * 8) / 9, (height * 2) / 2.3);
  container.mousePressed(openDiscover3);
}

function draw() {
  //define background color
  background("black");

  //define stroke and strokeWeight of the lines
  stroke("white");
  strokeWeight(9);

  //cycles that define the movment of the lines
  for (let i = num; i--; ) {
    for (let j = i; j--; ) {
      d = (x[i] - x[j]) ** 2 + (y[i] - y[j]) ** 2;
      if (minDistSq < d && d < maxDistSq) line(x[i], y[i], x[j], y[j]);
    }
  }
  for (let i = num; i--; ) {
    x[i] += vx[i];
    y[i] += vy[i];
    if (x[i] < 0 || x[i] > width) vx[i] *= -3;
    if (y[i] < 0 || y[i] > height) vy[i] *= -8;
  }
}

function returnIndex() {
  window.open("index.html", "_self");
}

function openDiscover3() {
  window.open("discover3.html", "_self");
}

//this function allows the music to start at the click of the mouse
function mousePressed() {
  canzonedisfondo.play();
  canzonedisfondo.setVolume(50);
  userStartAudio();
}
