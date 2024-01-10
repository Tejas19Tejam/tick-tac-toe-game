import { useGameState } from '../../context/GameStateProvider';
import PlayerIcon from '../../ui/PlayerIcon';

function TurnIndicator() {
	const { currentTurn } = useGameState();
	return (
		<div className='turn-indicator'>
			<PlayerIcon player={currentTurn} type='semiBold' />
			<span>Turn</span>
		</div>
	);
}

export default TurnIndicator;
