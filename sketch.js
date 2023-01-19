const urlString = window.location.href; // Collect the URL string of the page
let url = new URL(urlString); // Convert it into a parsable URL Object

let container, button, counterP, button2, counterP2, button3, counterP3;

function setup() {
  container = createElement("div");
  container.addClass("myContainer");

  button = createButton("LEARN");
  counterP = createP();

  container.child(button);
  counterP.parent(container);

  // let enter = createButton("COME AND SEE");
  container.size(320, 50);
  container.position(windowWidth / 2, 600);
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
}

function draw() {
  background(220, 20, 240);
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
