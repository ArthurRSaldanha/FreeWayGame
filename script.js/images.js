let wayImage;
let actorImage;
let carImage;
let car2Iamge;
let car3image;

let playSound;
let colisionSound;
let pointSound;

function preload(){
    wayImage = loadImage("material/estrada.png");
    actorImage = loadImage("material/ator-1.png");
    carImage = loadImage("material/carro-1.png");
    car2Image = loadImage("material/carro-2.png");
    car3Image = loadImage("material/carro-3.png");
    carsImage = [carImage, car2Image, car3Image, carImage, car2Image, car3Image];
    
    playSound = loadSound("material/sons/trilha.mp3");
    colisionSound = loadSound("material/sons/colidiu.mp3");
    pointSound = loadSound("material/sons/pontos.wav");
  }