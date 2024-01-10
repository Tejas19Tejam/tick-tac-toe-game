import GameLogo from '../../ui/GameLogo';
import TurnIndicator from './TurnIndicator';
import RefreshButton from './RefreshButton';

function StatusBar() {
	return (
		<div className='game-info'>
			<GameLogo />
			<TurnIndicator />
			<RefreshButton />
		</div>
	);
}

export default StatusBar;
