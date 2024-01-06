import PlayerIcon from '../../ui/PlayerIcon';

function TurnIndicator({ currentPlayer }) {
	return (
		<div className='turn-indicator'>
			<PlayerIcon player={currentPlayer} type='semiBold' />
			<span>Turn</span>
		</div>
	);
}

export default TurnIndicator;
