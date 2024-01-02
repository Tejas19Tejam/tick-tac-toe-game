import { useEffect, useLayoutEffect, useState } from 'react';
import { getQuote } from '../../utils/helper';

const initialQuote =
	'The most important thing is the thing most easily forgotten.';
function Quote() {
	const [quote, setQuote] = useState(initialQuote);
	const [quoteNumber, setQuoteNumber] = useState(1);

	// useLayoutEffect(
	// 	function () {
	// 		const id = setInterval(async () => {
	// 			const newQuote = await getQuote();
	// 			console.log(quoteNumber);
	// 			setQuoteNumber((preNum) => (preNum += 1));
	// 			setQuote(newQuote);
	// 		}, 3000);

	// 		return () => {
	// 			clearInterval(id);
	// 		};
	// 	},
	// 	[quote, quoteNumber]
	// );

	return (
		<>
			<p className='quote-number'>Quote # {quoteNumber}</p>
			<p className='quote-text'>
				<q>{quote}</q>
			</p>
		</>
	);
}

export default Quote;
