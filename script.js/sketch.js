
function setup() {
  createCanvas(500, 400);
  playSound.loop();
}

function draw() {
  background(wayImage);
  showActor();
  showCar();
  carMoviment();
  actorMoviment();
  carComeBack();
  checkColision();
  showPoints();
  scorePoints();
}