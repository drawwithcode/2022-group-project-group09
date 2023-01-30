const urlString = window.location.href; // Collect the URL string of the page
let url = new URL(urlString); // Convert it into a parsable URL Object

//variables are declared
let song;
let img;
let container, counterP, counterP2, counterP3;
var posX, posY, checkX, checkY;

//image and sound are loaded
function preload() {
  img = loadImage("assets/occhietto.png");
  song = loadSound("assets/Alberto Balsalm.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //create BUTTON FOR 'LEARN' PAGE
  container = createElement("div");
  var button = createButton("");
  button.id(learn);
  counterP = createP();
  //moving elements in the DOM structure
  container.child(learn);
  counterP.parent(container);
  //define the features of the button
  container.size(320, 50);
  container.position(width / 9, (height * 2) / 3.3);
  container.mousePressed(openLearn);

  //create BUTTON FOR 'ABOUT' PAGE
  container = createElement("div");
  var button = createButton("");
  button.id(about);
  counterP2 = createP();
  //moving elements in the DOM strucutre
  container.child(about);
  counterP2.parent(container);
  //define features of the button
  container.size(320, 50);
  container.position((width * 4) / 9, (height * 2) / 16);
  container.mousePressed(openAbout);

  //create BUTTON FOR 'DISCOVER' PAGE - relative to index
  container = createElement("div");
  var button = createButton("");
  button.id(button2);
  counterP3 = createP();
  //moving elements in the DOM strucure
  container.child(button2);
  counterP3.parent(container);
  //define features of the button
  container.size(100, 50);
  container.position((width * 8) / 9, (height * 2) / 2.3);
  container.mousePressed(openDiscover1);

  posX = width / 2;
  posY = height / 2;
  noStroke();
  imageMode(CENTER);
}

function draw() {
  background(0);

  //draw lines that divide the canva
  fill(255);
  rect(width / 3, 0, 5, height);
  fill(255);
  rect((width * 2) / 3, 0, 5, height);
  fill(255);
  rect(0, height / 2, width, 5);

  //call function that define the position of the eyes
  posicionar();

  //first eye
  image(img, width / 6, height / 4, 300, 150);
  fill(0);
  circle(posX - 500, posY - 200, 90);
  //second eye
  image(img, (width * 3) / 6, (height * 3) / 4, 300, 150);
  fill(0);
  circle(posX, posY + 200, 90);
  //third eye
  image(img, (width * 5) / 6, height / 4, 300, 150);
  fill(0);
  circle(posX + 500, posY - 200, 90);
  //fourth eye
  image(img, (width * 5) / 6, (height * 3) / 4, 300, 150);
  fill(0);
  circle(posX + 500, posY + 200, 90);
}

function openLearn() {
  window.open("learn.html", "_self");
}

function openAbout() {
  window.open("about.html", "_self");
}

function openDiscover1() {
  window.open("discover1.html", "_self");
}

//this function maps the position of the eye to the position of the mouse
function posicionar() {
  posX = map(mouseX, 0, width, width / 2 - 60, width / 2 + 60);
  posY = map(mouseY, 0, height, height / 2 - 60, height / 2 + 60);
}
