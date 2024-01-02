import PlayerIcon from '../../ui/PlayerIcon';

function Square({ getCurrentBoxIndex, option, isPcTurn }) {
	const selectedTile = option !== 'empty';

	return (
		<button
			className='square'
			onClick={getCurrentBoxIndex}
			disabled={selectedTile || isPcTurn}
		>
			{selectedTile ? (
				<PlayerIcon player={option} type='extraBold' />
			) : (
				' '
			)}
		</button>
	);
}

export default Square;
