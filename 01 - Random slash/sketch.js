let x=0;
let y=0;
let spacing=40;

function setup() {
  createCanvas(1024,768);
  background(0);
}

function draw() {
  stroke(0, 255, 0);

  if (random(1) < 0.5) {
    line(x-random(50), y, x+spacing, y+spacing);
    // triangle(x, x, x, x+spacing, x+spacing, y+spacing);
  }
  else {
    line(x, y+spacing-random(60), x+spacing, y);
    // triangle(y, y, y, x+spacing, x+spacing, x+spacing);
  }
  x=x+spacing;
  if (x > width) {
    x = 0;
    y = y + spacing;
  }

  if (y>width) {
    save("mySVG.svg"); // give file name
    save("myPNG.png"); // give file name
    print("saved svg");
    noLoop(); // we just want to export once
  }
}
