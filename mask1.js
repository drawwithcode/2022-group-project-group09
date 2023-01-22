function createBlurMask(width, height, r) {
  const g = createGraphics(width, height);
  // g.noStroke();
  g.background(0);

  g.drawingContext.filter = `blur(${r}px)`;

  g.drawingContext.ellipse(
    width / 2,
    height / 2,
    width / 4,
    height / 4,
    0,
    0,
    TWO_PI
  );
  g.drawingContext.fill();

  return { graphics: g, width: width, height: height, background: 0 };
}

function applyMask(mask, x, y) {
  push();
  blendMode(MULTIPLY);

  image(mask.graphics, x, y);

  fill(mask.background);
  noStroke();

  // Draw the right, left, top, bottom rectangles to mask the entire screen
  const r = x + mask.width,
    l = x,
    t = y,
    b = t + mask.height;
  rect(0, 0, width, y); // top
  rect(0, b, width, height - b); // bottom
  rect(0, t, x, b - t); // left
  rect(r, t, width - r, b - t); // right

  pop();
}

// function update(e) {
//   var x = e.clientX || e.touches[0].clientX;
//   var y = e.clientY || e.touches[0].clientY;

//   document.documentElement.style.setProperty("--cursorX", x + "px");
//   document.documentElement.style.setProperty("--cursorY", y + "px");
// }

// document.addEventListener("mousemove", update);
// document.addEventListener("touchmove", update);
