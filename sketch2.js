const urlString = window.location.href; // Collect the URL string of the page
let url = new URL(urlString); // Convert it into a parsable URL Object

let container, counterP, counterP2;

function setup() {
  createCanvas(windowWidth, windowHeight);

  container = createElement("div");
  //container.addClass("myContainer");

  var button = createButton("");
  button.id(button1);
  counterP = createP();

  container.child(button1);
  counterP.parent(container);

  // let enter = createButton("COME AND SEE");
  container.size(320, 50);
  container.position(50, 50);
  container.mousePressed(returnIndex);

  //pausa pausa

  container = createElement("div");
  // container.addClass("myContainer");

  var button = createButton("");
  button.id(button2);
  counterP2 = createP();

  container.child(button2);
  counterP2.parent(container);

  // let enter = createButton("COME AND SEE");
  container.size(320, 50);
  container.position(1300, 600);
  container.mousePressed(openDiscover2);
}

function draw() {
  background(0, 0, 0);
  fill(255);
  rect(width / 3, 0, 5, height);
}

function returnIndex() {
  window.open("index.html", "_self");
}

function openDiscover2() {
  window.open("discover2.html", "_self");
}
