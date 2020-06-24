function setup() {
  createCanvas(1000, 1000); // Create SVG Canvas
  strokeWeight(1); // do 0.1 for laser
  stroke(255, 0, 0); // red is good for laser
  noFill(); // better not to have a fill for laser
}

function draw() {
  for (x = 0; x < 100; x++) {
    for (y = 0; y < 100; y++) {
      circle(x * random(409), y * random(400), x+random(20), y+random(20));
    }
  }
  save("mySVG.svg"); // give file name
  print("saved svg");
  noLoop(); // we just want to export once
}
