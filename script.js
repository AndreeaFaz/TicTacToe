const playerX = 'x';
const player0 = '0';
let currentPlayer = playerX;
let gameStatus = ['', '', '', '', '', '', '', '', ''];
const winningCombinations = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

const boxElements = document.getElementsByClassName('box');
const winningMessage = document.getElementById('winningMessage');
const announceTurns = document.getElementById('player');

for (let box of boxElements) {
	box.addEventListener('click', handleClick, {once: true});
}

function handleClick(e) {
	const clickedBox = e.target;
	clickedBox.innerHTML =  currentPlayer;
	gameStatus[clickedBox.id] = currentPlayer;
	printResult();
}

function checkWin() {
	for (let i = 0; i < 8; i++) {
		const winCondition = winningCombinations[i];
		const a = gameStatus[winCondition[0]];
		const b = gameStatus[winCondition[1]];
		const c = gameStatus[winCondition[2]];
		if (a == b && b == c && a != '') {
			return true;
		}
	}
	return false;
}

function printResult() {
	if (checkWin()) {
		winningMessage.innerHTML = "Player " + currentPlayer + " wins";
	} else {
		changePlayer();
		announceTurns.innerHTML = "It's player " + currentPlayer + " turn";
	}
	if (!checkWin() && !gameStatus.includes('')) {
		winningMessage.innerHTML = "It's tie";
	}
}

function changePlayer() {
	if (currentPlayer == playerX) {
		currentPlayer = player0;
	} else {
		currentPlayer = playerX;
	}
}

function playAgain() {
	location.reload();	
}