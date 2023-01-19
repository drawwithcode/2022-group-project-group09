const urlString = window.location.href; // Collect the URL string of the page
let url = new URL(urlString); // Convert it into a parsable URL Object

let container, button, counterP, button2, counterP2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  container = createElement("div");
  container.addClass("myContainer");

  button = createButton("MENU'");
  counterP = createP();

  container.child(button);
  counterP.parent(container);

  // let enter = createButton("COME AND SEE");
  container.size(320, 50);
  container.position(100, 100);
  container.mousePressed(returnIndex);

  //pausa pausa

  container = createElement("div");
  container.addClass("myContainer");

  button2 = createButton("DISCOVER");
  counterP2 = createP();

  container.child(button2);
  counterP2.parent(container);

  // let enter = createButton("COME AND SEE");
  container.size(320, 50);
  container.position(1300, 600);
  container.mousePressed(openDiscover2);
}

function draw() {
  background(20, 20, 40);
}

function returnIndex() {
  window.open("index.html", "_self");
}

function openDiscover2() {
  window.open("discover2.html", "_self");
}
