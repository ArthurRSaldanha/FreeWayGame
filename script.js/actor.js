let yActor = 366;
let xActor = 85;

let colision = false;

let myPoints = 0;

function showActor(){
    image(actorImage, xActor, yActor, 30, 30); // carrega imagem (imagem, X, Y, largura, altura)
};

function actorMoviment(){
    if (keyIsDown(UP_ARROW)){
        yActor -= 3;
    }

    if (keyIsDown(DOWN_ARROW)){
        if (canMoveDown()){
            yActor += 3;
        }
    }
}

function checkColision(){
    for (let i = 0; i < carsImage.length; i++){
        // collideRectRect(x, y, width, height, x2, y2, width2, height2 )
        colision = collideRectCircle(xCars[i], yCars[i], carWidth, carHeight, xActor, yActor, 15);
        if (colision) {
            actorComeBack();
            colisionSound.play();
            if (pointsGreaterThanZero()){
                myPoints -= 1;
            }
        }
    }
}

function actorComeBack(){
    yActor = 366;
}

function showPoints(){
    textAlign(CENTER);
    textSize(25);
    fill(color(255, 240, 0));
    text(myPoints, width / 5, 27);
}

function scorePoints(){
    if (yActor < 15){
        myPoints += 1;
        pointSound.play();
        actorComeBack();
    }
}

function pointsGreaterThanZero(){
    return myPoints > 0;
}

function canMoveDown(){
    return yActor < 366;
}