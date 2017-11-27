//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//04_Exercise01 - Loops and Random Color

let size = 250;

function setup() {
  createCanvas(500, 500);
//  frameRate(3); //Drawing speed 3 fps
}

function draw() {
  background(0);

  let m1 = map(mouseX,0,width,0,255);
  let m2 = map(mouseY,0,width,0,255);
  let m3 = map(mouseX,0,width,255,0);
  let m4 = map(mouseY,0,width,255,0);

  let box1 = color(255,0,0,m1);
  let box2 = color(0,255,0,m2);
  let box3 = color(0,0,255,m3);
  let box4 = color(255,0,255,m4);

  fill(box1);
  rect (0,0,size,size);
  fill(box2);
  rect (0,size,size,size);
  fill(box3);
  rect (size,0,size,size);
  fill(box4);
  rect (size,size,size,size);
    }
