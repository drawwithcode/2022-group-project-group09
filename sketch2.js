const urlString = window.location.href; // Collect the URL string of the page
let url = new URL(urlString); // Convert it into a parsable URL Object

//variables are declared
let container, counterP, counterP2;

function setup() {
  createCanvas(windowWidth, windowHeight);

  //create BUTTON FOR 'INDEX' PAGE
  container = createElement("div");
  var button = createButton("");
  button.id(button1);
  counterP = createP();
  //moving elements in the DOM structure
  container.child(button1);
  counterP.parent(container);
  //define the features of the button
  container.size(320, 50);
  container.position(50, 50);
  container.mousePressed(returnIndex);

  //create BUTTON FOR 'DISCOVER' PAGE - relative to about
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
  container.mousePressed(openDiscover2);
}

function draw() {
  //all the text is write in the html page
}

function returnIndex() {
  window.open("index.html", "_self");
}

function openDiscover2() {
  window.open("discover2.html", "_self");
}
