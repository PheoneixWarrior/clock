 
 
 

function setup() {
  createCanvas(800,400);
  var h = hour();
  var m = minute();
  var s = second()
 // createSprite(400, 200, 50, 50);
  sangle = map(s,0,60,0,360)
  mangle = map(m,0,60,0,360)
  hangle = map(h,0,12,0,360)


}

function draw() {
  background(255,255,255);
  push();
  rotate(sangle)
  stroke("lavender")
  strokeWeight(7)
  arc(50, 50, 80, 80, 0, sangle);
  pop();

  background(255,255,255);
  push();
  rotate(mangle)
  stroke("purple")
  strokeWeight(7)
  arc(50, 50, 80, 80, 0, mangle);

  pop();

  background(255,255,255);
  push();
  rotate(hangle)
  stroke("skyblue")
  strokeWeight(7)
  arc(50, 50, 80, 80, 0, hangle);
  pop();

  drawSprites();
}