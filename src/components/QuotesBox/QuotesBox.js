import Quote from './Quote';

function QuotesBox() {
	// function handleGetQuote() {
	// 	setInterval(async () => {
	// 		const newQuote = await getQuote();
	// 		console.log(newQuote);
	// 		setQuote(newQuote);
	// 	}, [8000]);
	// }

	return (
		<section className='quote-container'>
			<Quote />
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='29'
				height='29'
				viewBox='0 0 29 29'
				fill='none'
			>
				<circle
					cx='14.5'
					cy='14.5'
					r='14.5'
					transform='matrix(1 0 0 -1 0 29)'
					fill='#31C4BE'
				/>

				<rect
					x='7'
					y='6'
					width='9'
					height='9'
					stroke-width='2'
					fill='#192a32'
				/>

				<rect
					x='14'
					y='14'
					width='9'
					height='9'
					fill='#192a32'
					stroke-width='2'
				/>
			</svg>
		</section>
	);
}

export default QuotesBox;
