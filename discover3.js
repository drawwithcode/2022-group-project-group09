const urlString = window.location.href; // Collect the URL string of the page
let url = new URL(urlString); // Convert it into a parsable URL Object

let container, button, counterP;

let mask;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mask = createBlurMask(500, 500, 30, 25);

  container = createElement("div");
  container.addClass("myContainer");

  button = createButton("BACK");
  counterP = createP();

  container.child(button);
  counterP.parent(container);

  // let enter = createButton("COME AND SEE");
  container.size(320, 50);
  container.position(1300, 600);
  container.mousePressed(returnLearn);
}

function draw() {
  background(250, 200, 40);
  fill(0);
  textSize(100);
  text("discover3", 200, 200);
  applyMask(mask, mouseX - mask.width / 2, mouseY - mask.height / 2);
}

function returnLearn() {
  window.open("Learn.html", "_self");
}
