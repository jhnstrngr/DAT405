//https://p5js.org
//https://p5js.org/learn/

//DAT405 / GAD405
//02_Coordinates

//Initialization function
function setup() {
  //Set the size of rendering window - pixels
  createCanvas(400, 400);

  //Set the size of all text
  textSize(18);

  //No stroke for shapes
  noStroke();
}

//Rendering function
function draw() {
  //Erase all canvas. Set the color to white
  background(100);
  //Black Back
  //1
  fill(0, 0, 0);
  rect(150, 50, 100, 300);

  //2
  fill(0, 0, 0);
  rect(100, 75, 200, 250);

  //3
  fill(0, 0, 0);
  rect(75, 100, 250, 200);

  //4
  fill(0, 0, 0);
  rect(50, 150, 300, 100);

  //Red Top
  //1
  fill(250, 0, 0);
  rect(150, 75, 100, 250);

  //2
  fill(250, 0, 0);
  rect(100, 100, 200, 200);

  //3
  fill(250, 0, 0);
  rect(75, 150, 250, 100);

  //4
  fill(250, 0, 0);
  rect(75, 175, 250, 50);

  //White Bottom
  //1
  fill(250, 250, 250);
  rect(100, 225, 200, 75);

  //2
  fill(250, 250, 250);
  rect(75, 225, 25, 25);

  //3
  fill(250, 250, 250);
  rect(300, 225, 25, 25);

  //3
  fill(250, 250, 250);
  rect(150, 300, 125, 25);

  //Black middle
  //1
  fill(0, 0, 0);
  rect(75, 200, 25, 25);

  //2
  fill(0, 0, 0);
  rect(300, 200, 25, 25);

  //2
  fill(0, 0, 0);
  rect(100, 225, 50, 25);

  //3
  fill(0, 0, 0);
  rect(150, 200, 100, 50);

  //4
  fill(0, 0, 0);
  rect(250, 225, 50, 25);

  //5
  fill(0, 0, 0);
  rect(175, 175, 50, 100);

  //White middle
  //1
  fill(250, 250, 250);
  rect(175, 200, 50, 50);

}
