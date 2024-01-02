import { useEffect } from 'react';
import PlayerIcon from '../../ui/PlayerIcon';

function TurnIndicator({
	handleTileIndex,
	toggleTurn,
	currentPlayer,
	tileIndex,
}) {
	useEffect(() => {
		if (tileIndex === null) return;
		// Toggle Current Player Turn
		toggleTurn();
		// Set TileIndex to null
		handleTileIndex(null);
	}, [tileIndex, handleTileIndex]);

	return (
		<div className='turn-indicator'>
			<PlayerIcon player={currentPlayer} type='semiBold' />
			<span>Turn</span>
		</div>
	);
}

export default TurnIndicator;
