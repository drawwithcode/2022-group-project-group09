const urlString = window.location.href; // Collect the URL string of the page
let url = new URL(urlString); // Convert it into a parsable URL Object

let container, button, counterP, button2, counterP2;

let trails = [];
let currentPath = [];
let x, y, breadth;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200, 20, 40);
  rectMode(CENTER);
  Init();

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
  for (let i = 50; i--; ) Update();
}

mousePressed = () => {
  background(200, 20, 40);
  trails.length = 0;
  currentPath.length = 0;
  noiseSeed();
  Init();
};

const Init = () => {
  if (currentPath.length > 0) {
    trails = trails.concat(currentPath);
  }
  x = random(width);
  y = random(height);
  breadth = random(5, 50);

  fill(color(random(256), random(256), random(256)));
  currentPath.length = 0;
};

const Update = () => {
  const n = noise(x / width, y / height);
  const angle = n * TWO_PI * 1.5;
  x += cos(angle) * 2;
  y += sin(angle) * 2;

  if (x < 0 || y < 0 || x > width || y > height) {
    Init();
    return;
  }

  const collide = trails.some(
    (t) => (t.x - x) ** 2 + (t.y - y) ** 2 < (t.breadth / 2 + breadth / 2) ** 2
  );
  if (collide) {
    Init();
    return;
  }

  currentPath.push({
    x: x,
    y: y,
    breadth: breadth,
  });

  push();
  translate(x, y);
  rotate(angle);
  noStroke();
  rect(0, 0, 1, 0.8 * breadth);
  stroke("black");
  rect(0, 0.4 * breadth, 1, 1);
  pop();
};

function returnIndex() {
  window.open("index.html", "_self");
}

function openDiscover2() {
  window.open("discover3.html", "_self");
}
