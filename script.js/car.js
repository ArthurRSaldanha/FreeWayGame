//variáveis carro
let xCars = [600, 600, 600, 600, 600, 600] //posição x do carro
let yCars = [40, 96, 150, 210, 270, 318] //posição y do carro
let carsVelocity = [2, 3.5, 3, 5, 4, 2.4] //velocidade do carro
let carWidth = 50;
let carHeight = 40;

function showCar(){
    for (let i = 0; i < carsImage.length; i++){
        image(carsImage[i], xCars[i], yCars[i], carWidth, carHeight);
    }
}
  
  function carMoviment(){
    for (let i = 0; i < carsImage.length; i++){
        xCars[i] -= carsVelocity[i];
    }
}

//Não entendi essa parte do código daqui
function carComeBack(){
    for ( i = 0; i < carsImage.length; i++){
        if(passouTodaATela(xCars[i])){
            xCars[i] = 600;
        }
    }
}

function passouTodaATela(xCars){
    return xCars < - 50;
}
// Até aqui