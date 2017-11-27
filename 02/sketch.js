//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//01_For-Loop

//Define the variable for the size
let size = 50;

function setup() {
  createCanvas(1000, 1000);
//  noLoop();
  frameRate(30);
}

function draw() {

      fill(250);
      for (let x = 0; x < 50; x++){
        let r = random(100, 500);
        let r2 = random(0, 255)
        let r3 = random(0, 255)
        let r4 = random(0, 255)

        fill(r2, r3,r4)
        rect(random(width), random(height), r, r);

      }

      for (let x = 0; x < 50; x++){
        let r = random(5, 300);
        let r2 = random(0, 255)
        let r3 = random(0, 255)
        let r4 = random(0, 255)

        fill(r2, r3,r4)
        ellipse(random(width), random(height), r, r);
      }

}
