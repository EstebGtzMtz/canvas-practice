const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let frames = 0;
let interval;

class Figure {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }
    moveLeft() {
        this.x -= 25;
    }
    moveRight() {
        this.x += 25;
    }
    moveDown() {
        this.y += 25;
    }
    moveUp() {
        this.y -= 25;
    }
    checkCollitions(topObstacle, leftObstacle, bottomObstacle, rightObstacle) {
        if (this.x <= leftObstacle.width) {
            this.x = leftObstacle.width;
        } else if (this.x >= canvas.width - rightObstacle.width) {
            this.x = (canvas.width - rightObstacle.width) - this.width;
        } else if (this.y >= canvas.height) {
            // this.y = (canvas.height - bottomObstacle.heigth) - this.heigth;
        } else if (this.y <= topObstacle.heigth) {
            this.y = topObstacle.heigth;
        }
        console.log(canvas.height, bottomObstacle.heigth)
    }
}

class Obstacle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw() {
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = 'red'
    }
}

const mainSquare = new Figure(300, 300, 50, 50);
const leftObstacle = new Obstacle(canvas.width - 100, 100, 100, 400);
const rightObstacle = new Obstacle(0, 100, 100, 400);
const topObstacle = new Obstacle(100, 0, 400, 100);
const bottomObstacle = new Obstacle(100, canvas.height - 100, 400, 100);


function update() {
    frames++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    mainSquare.draw();
    leftObstacle.draw();
    rightObstacle.draw();
    topObstacle.draw();
    bottomObstacle.draw();
    mainSquare.checkCollitions(topObstacle, leftObstacle, bottomObstacle, rightObstacle);
}

function start() {
    interval = setInterval(update, 1000 / 60);
}

start();

document.addEventListener('keydown', ({ keyCode }) => {
    switch (keyCode) {
        case 37:
            mainSquare.moveLeft();
            break;
        case 38:
            mainSquare.moveUp();
            break;
        case 39:
            mainSquare.moveRight();
            break;
        case 40:
            mainSquare.moveDown();
            break;
    }
})