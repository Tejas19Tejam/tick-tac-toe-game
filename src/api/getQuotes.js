export async function getQuote() {
	const data = await fetch('https://api.adviceslip.com/advice');
	const quote = await data.json();

	return quote.slip.advice;
}
