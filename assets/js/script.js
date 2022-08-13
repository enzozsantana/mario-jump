const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const restartButton = document.querySelector('.restart-button');

const jump = ({ keyCode }) => {
    if(keyCode == 32 || keyCode == 38 || keyCode == 87) {
        mario.classList.add('jump');

        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    let marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    // Game Over
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        // Game Over pipe
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        // Game Over Mario
        mario.style.animation = 'none';
        mario.src = 'assets/images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
        
        // Animação Mario Game Over
        let downInterval = setInterval(() => {
            marioPosition -= 20;
            mario.style.bottom = `${marioPosition}px`;
        }, 100);

        // Aparecer botão de restart
        restartButton.style.visibility = 'visible';
        //recarregar a página para o jogo recomeçar
        restartButton.addEventListener('click', () => window.location.reload());

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);