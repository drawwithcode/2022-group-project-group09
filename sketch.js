const urlString = window.location.href; // Collect the URL string of the page
let url = new URL(urlString); // Convert it into a parsable URL Object

let img;
let container, button, counterP, button2, counterP2, button3, counterP3;
var posX, posY, checkX, checkY;

function preload() {
  img = loadImage("assets/occhietto.png");
}

function setup() {
  container = createElement("div");
  container.addClass("myContainer");

  button = createButton("LEARN");
  counterP = createP();

  container.child(button);
  counterP.parent(container);

  // let enter = createButton("COME AND SEE");
  container.size(320, 50);
  container.position(windowWidth / 6, 600);
  container.mousePressed(openLearn);

  //pausa pausa

  container = createElement("div");
  container.addClass("myContainer2");

  button2 = createButton("ABOUT");
  counterP2 = createP();

  container.child(button2);
  counterP2.parent(container);

  // let enter = createButton("COME AND SEE");
  container.size(320, 50);
  container.position(windowWidth / 2, 100);
  container.mousePressed(openAbout);

  //pausa pausa

  container = createElement("div");
  container.addClass("myContainer3");

  button3 = createButton("DISCOVER");
  counterP3 = createP();

  container.child(button3);
  counterP3.parent(container);

  // let enter = createButton("COME AND SEE");
  container.size(320, 50);
  container.position(1300, 600);
  container.mousePressed(openDiscover1);

  createCanvas(windowWidth, windowHeight);
  posX = width / 2;
  posY = height / 2;
  noStroke();
  imageMode(CENTER);
}

function draw() {
  background(20);

  fill(255);
  rect(width / 3, 0, 5, height);
  fill(255);
  rect((width * 2) / 3, 0, 5, height);
  fill(255);
  rect(0, height / 2, width, 5);

  posicionar();
  // fill(255);
  // ellipse(width / 6, height / 4, 200, 140);
  // arc(width / 6, height / 4, 300, 180, 0, PI, OPEN);

  // stroke(255);
  // noFill();

  // strokeWeight(4);
  // point(100, 250);
  // point(150, 200);
  // point(350, 200);
  // point(400, 250);

  // strokeWeight(1);
  // beginShape();

  // curveVertex(100, 250);
  // curveVertex(150, 200);
  // curveVertex(350, 200);
  // curveVertex(400, 250);
  // endShape();

  // noStroke();
  image(img, width / 6, height / 4, 300, 150);

  fill(20);
  circle(posX - 550, posY - 150, 90);

  // fill(255);
  // circle((width * 3) / 6, (height * 3) / 4, 180);
  image(img, (width * 3) / 6, (height * 3) / 4, 300, 150);

  fill(20);
  circle(posX, posY + 200, 90);

  // fill(255);
  // circle((width * 5) / 6, height / 4, 180);
  image(img, (width * 5) / 6, height / 4, 300, 150);

  fill(20);
  circle(posX + 500, posY - 150, 90);

  // fill(255);
  // circle((width * 5) / 6, (height * 3) / 4, 180);
  image(img, (width * 5) / 6, (height * 3) / 4, 300, 150);

  fill(20);
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

function posicionar() {
  posX = map(mouseX, 0, width, width / 2 - 60, width / 2 + 60);
  posY = map(mouseY, 0, height, height / 2 - 60, height / 2 + 60);
}
