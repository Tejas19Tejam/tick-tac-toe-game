import { useGameState } from '../../context/GameStateProvider';
import PlayerIcon from '../../ui/PlayerIcon';

function Square({ getCurrentBoxIndex, option }) {
	const { winner, currentTurn, humanSelectedOption } = useGameState();

	const selectedTile = option !== '';
	const isPcTurn = currentTurn !== humanSelectedOption;
	const gameComplete = winner !== '';

	if (selectedTile)
		return (
			<button className='square' disabled>
				{selectedTile ? (
					<PlayerIcon player={option} type='extraBold' />
				) : (
					' '
				)}
			</button>
		);

	return (
		<button
			className='square'
			onClick={getCurrentBoxIndex}
			disabled={gameComplete || isPcTurn}
		>
			''
		</button>
	);
}

export default Square;
