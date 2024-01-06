import { checkForWinner } from './checkForWinner';

// This function will return an index for computer move
export function makeComputerMove(board, marker) {
	const emptyIndices = getEmptyIndex(board);
	const computerMarker = marker;

	// Priority wining move
	for (const index of emptyIndices) {
		const simulatedBoard = [...board];
		simulatedBoard[index] = computerMarker;
		if (checkForWinner(simulatedBoard, computerMarker)) {
			return index;
		}
	}

	// Block opponent's move
	const opponentMarker = computerMarker === 'x' ? 'o' : 'x';
	for (const index of emptyIndices) {
		const simulatedBoard = [...board];
		simulatedBoard[index] = opponentMarker;
		if (checkForWinner(simulatedBoard, opponentMarker)) {
			console.log(index);
			return index;
		}
	}

	// Take any random index from remaining empty position
	return getRandomIndex(emptyIndices);
}

// Return an array of empty indices from board
function getEmptyIndex(board) {
	const emptyStateIndex = [];
	board.forEach((state, i) => {
		if (state === '') emptyStateIndex.push(i);
	});

	return emptyStateIndex;
}

// Return random index of available empty space from emptyIndex array
function getRandomIndex(emptyIndexArray) {
	const index = Math.floor(Math.random() * emptyIndexArray.length);
	return emptyIndexArray[index];
}
