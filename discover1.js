const urlString = window.location.href; // Collect the URL string of the page
let url = new URL(urlString); // Convert it into a parsable URL Object
let img;
let container, button, counterP;

let mask;

function preload() {
  img = loadImage("./assets/sketch1.png");
}

function setup() {
  createCanvas(windowWidth, 4000);
  mask = createBlurMask(500, 500, 30, 25);

  container = createElement("div");
  container.addClass("myContainer");

  button = createButton("");
  counterP = createP();

  container.child(button1);
  counterP.parent(container);

  // let enter = createButton("COME AND SEE");
  container.size(320, 50);
  container.position(1300, 600);
  container.mousePressed(returnIndex);
}

function draw() {
  image(img, 0, 0, windowWidth, 4000);
  // fill(0);
  // textSize(100);
  // text("discover1", 200, 200);
  applyMask(mask, mouseX - mask.width / 2, mouseY - mask.height / 2);
}

function returnIndex() {
  window.open("index.html", "_self");
}
