const urlString = window.location.href; // Collect the URL string of the page
let url = new URL(urlString); // Convert it into a parsable URL Object

let container, counterP, counterP2;

const num = 720;
const x = new Float32Array(num);
const y = new Float32Array(num);
const vx = new Float32Array(num);
const vy = new Float32Array(num);
const maxDistSq = 20 ** 2;
const minDistSq = 16 ** 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);

  for (let i = num; i--; ) {
    const a = i / 2;
    vx[i] = cos(a);
    vy[i] = sin(a);
    x[i] = width / 2 + (vx[i] * width) / 2;
    y[i] = height / 2 + (vy[i] * height) / 2;
    song = loadSound("assets/lucky_dragons_-_power_melody.mp3");
  }

  container = createElement("div");
  // container.addClass("myContainer");

  var button = createButton("");
  button.id(button1);
  counterP = createP();

  container.child(button1);
  counterP.parent(container);

  // let container = createButton("MENU'");
  container.size(320, 50);
  container.position(100, 100);
  container.mousePressed(returnIndex);

  //pausa pausa

  container = createElement("div");
  // container.addClass("myContainer");

  var button = createButton("");
  button.id(button2);
  counterP2 = createP();

  container.child(button2);
  counterP2.parent(container);

  // let container = createButton("DISCOVER");
  container.size(100, 50);
  container.position((width * 8) / 9, (height * 2) / 2.3);
  container.mousePressed(openDiscover3);
}

function draw() {
  background("black");
  stroke("white");
  strokeWeight(9);
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

    loop();
  }
}
function returnIndex() {
  window.open("index.html", "_self");
}

function openDiscover3() {
  window.open("discover3.html", "_self");
}
