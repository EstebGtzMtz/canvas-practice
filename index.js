const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let frames = 0;
let interval;

class Figure {
    constructor(x, y, width, heigth) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.heigth = heigth;
    }
    draw() {
        ctx.fillStyle = "orange";
        ctx.fillRect(this.x, this.y, this.width, this.heigth);
        ctx.stroke();
    }
    moveLeft() {
        this.x -= 25;
    }
    moveRight() {
        this.x += 25;
    }
    moveDown() {
        this.y -= 25;
    }
    moveUp() {
        this.y += 25;
    }
}

const mainSquare = new Figure(300, 300, 50, 50);

function update() {
    frames++;
    mainSquare.draw();
}

function start() {
    interval = setInterval(update, 1000 / 60);
}

start();