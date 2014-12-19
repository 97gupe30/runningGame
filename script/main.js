function init() {
    game = document.getElementById('game');
    ctx = game.getContext('2d');
    window.setInterval(update, 25);

}

function update() {
    ctx.clearRect(0, 0, game.width, game.height);
    ctx.canvas.width  = window.innerWidth;
    ctx.fillStyle(255, 0, 0);
    ctx.fillRect(0, window.innerHeight, window.innerWidth, -150);
}