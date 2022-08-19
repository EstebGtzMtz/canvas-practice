const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
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
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.heigth);
        ctx.stroke();
    }
}

const mainSquare = new Figure(300, 300, 50, 50)

const update = () => {
    frames++;
    mainSquare.draw()
    interval = setInterval(frames, 1000 / 60);
}

window.onload = () => {
    update();
}