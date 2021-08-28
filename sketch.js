var ball = {
  ballx: 50,
  bally: 30,
  r: 58,
  color: ["blue","green","red"],
  xspeed:0,
  yspeed:0
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.ballx,ball.bally,ball.r);
  fill(ball.color[0]);
  ball.xspeed=2;
  ball.ballx = ball.ballx + ball.xspeed;
}