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
  let m2 = map(mouseY,0,height,0,255);
  let m3 = map(mouseX,0,width,255,0);
  let m4 = map(mouseY,0,width,255,0);

  let c1 = color(255,0,0,m1);
  let c2 = color(0,255,0,m2);
  let c3 = color(0,0,255,m3);
  let c4 = color(255,0,255,m4);

  fill(c1);
  rect (0,0,size,size);
  fill(c2);
  rect (0,size,size,size);
  fill(c3);
  rect (size,0,size,size);
  fill(c4);
  rect (size,size,size,size);
    }
