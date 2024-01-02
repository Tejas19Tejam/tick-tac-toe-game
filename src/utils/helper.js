// This function will return an array of indexes of empty square(tiles)
export function randomIndex(boardState) {
	const emptyStateIndex = [];
	boardState.forEach((state, i) => {
		if (state === 'empty') emptyStateIndex.push(i);
	});
	const index = Math.floor(Math.random() * emptyStateIndex.length);

	return emptyStateIndex[index];
}

export async function getQuote() {
	const data = await fetch('https://api.adviceslip.com/advice');
	const quote = await data.json();

	return quote.slip.advice;
}
