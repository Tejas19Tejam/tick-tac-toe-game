import GameLogo from '../../ui/GameLogo';
import TurnIndicator from './TurnIndicator';
import RefreshButton from './RefreshButton';

function StatusBar({ currentPlayer }) {
	return (
		<div className='game-info'>
			<GameLogo />
			<TurnIndicator currentPlayer={currentPlayer} />
			<RefreshButton />
		</div>
	);
}

export default StatusBar;
