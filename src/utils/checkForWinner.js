// Return true if there any winning combination found i.e [x - x - x]
export function checkForWinner(board, marker) {

	const winningCombinations = [
		[0, 1, 2], // Row
		[3, 4, 5], // Row
		[6, 7, 8], // Row
		[0, 3, 6], // Column
		[1, 4, 7], // Column
		[2, 5, 8], // Column
		[0, 4, 8], // 1st Diagonal
		[2, 4, 6], // 2nd Diagonal
	];

	for (const combination of winningCombinations) {
		if (combination.every((index) => board[index] === marker)) {
			return true;
		}
	}
	return false;
}


