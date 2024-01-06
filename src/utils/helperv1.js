// This function will return an array of indexes of empty square(tiles)
import { getRandomIndex } from './getRandom';

export function makeComputerMove(boardState, curTurn) {
	const move = [];
	const lines = [
		[0, 1, 2], // Row
		[3, 4, 5], // Row
		[6, 7, 8], // Row
		[0, 3, 6], // Column
		[1, 4, 7], // Column
		[2, 5, 8], // Column
		[0, 4, 8], // 1st Diagonal
		[2, 4, 6], // 2nd Diagonal
	];

	lines.forEach((line) => {
		const [firstValueIndex, secondValueIndex, thirdValueIndex] = line;

		// [ "x" , "x" , "empty"]
		if (
			boardState[firstValueIndex] === boardState[secondValueIndex] &&
			boardState[firstValueIndex] &&
			boardState[secondValueIndex] !== '' &&
			boardState[thirdValueIndex] === ''
		) {
			console.log(['x', 'x', 'empty']);

			move.push(thirdValueIndex);
		}

		if (
			boardState[secondValueIndex] === boardState[thirdValueIndex] &&
			boardState[secondValueIndex] &&
			boardState[thirdValueIndex] !== '' &&
			boardState[firstValueIndex] === ''
		) {
			console.log(['empty', 'x', 'x']);

			move.push(firstValueIndex);
		}

		if (
			boardState[firstValueIndex] === boardState[thirdValueIndex] &&
			boardState[firstValueIndex] &&
			boardState[thirdValueIndex] !== '' &&
			boardState[secondValueIndex] === ''
		) {
			console.log(['x', 'empty', 'x']);

			move.push(secondValueIndex);
		}

		console.log(move);
		return checkForWin(move)
			? getWinningMove(move, curTurn, boardState)
			: move[0];
	});

	if (!move.index) {
		// move.index = getRandomIndex(boardState);
		move.push(getRandomIndex(boardState));
		return move[0];
	}
}

function checkForWin(move) {
	return move.length > 1;
}

function getWinningMove(move, curTurn, boardState) {
	const [move1, move2] = move;

	const state1 = boardState[move1];
	console.log(boardState);
	console.log('State1', state1);

	return curTurn === state1 ? move1 : move2;
}

export async function getQuote() {
	const data = await fetch('https://api.adviceslip.com/advice');
	const quote = await data.json();

	return quote.slip.advice;
}
