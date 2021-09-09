const user = document.querySelector('.userchoise img'),
      computer = document.querySelector('.computerchoise img'),
      startBtn = document.querySelector('.startBtn'),
      result = document.querySelector('.result');

const winStates = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
};

let userChoise;

startBtn.addEventListener('click', function () {
    this.disabled = true;
    result.innerHTML = '';

    user.className = computer.className = 'count-in';
    user.src = './img1/rock.png';
    computer.src = './img2/rock.png';
});

document.addEventListener('keydown', function (event) {
    if(event.key === 'r') {
        userChoise = 'rock';
    } else if(event.key === 'p') {
        userChoise = 'paper';
    } else {
        userChoise = 'scissors';
    }
});

document.addEventListener('animationend', function () {
    if(!userChoise) {
        userChoise = getRandomChoise();
    }

    startBtn.disabled = false;

    let computerChoise = getRandomChoise();

    user.className = computer.className = '';
    user.src = `./img1/${userChoise}.png`;
    computer.src = `./img2/${computerChoise}.png`;

    result.innerHTML = getWinner(userChoise, computerChoise);
    userChoise = '';
});

function getRandomChoise() {
    return Object.keys(winStates)[Math.floor(Math.random() * 3)];
}

function getWinner(userChoise, computerChoise) {
    if(userChoise === computerChoise) {
        return 'Draw';
    } else if(userChoise === winStates[computerChoise]) {
        return 'Computer Wins!';
    }
    return 'You Win!';
}