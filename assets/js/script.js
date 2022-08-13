const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

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

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.src = 'assets/images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
        
        let downInterval = setInterval(() => {
            marioPosition -= 20;
            mario.style.bottom = `${marioPosition}px`;
        }, 100);
        
        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);