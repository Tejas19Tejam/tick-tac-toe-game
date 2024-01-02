import { useEffect, useState } from 'react';
import GameLogo from '../../ui/GameLogo';
import Square from './Square';

import { randomIndex } from '../../utils/helper';
import TurnIndicator from './TurnIndicator';
import RefreshButton from './RefreshButton';
import ScoreDashboard from './ScoreDashboard';

//  Represents the initial state of the board
const initialBoardState = [
	'empty',
	'empty',
	'empty',
	'empty',
	'empty',
	'empty',
	'empty',
	'empty',
	'empty',
];

function Board({ humanTurn }) {
	// Represent the current player's turn
	// humanTurn = human Turn
	const [turn, setTurn] = useState(humanTurn);

	// Represents the overall state of the board, including occupied positions.
	const [boardState, setBoardState] = useState(initialBoardState);

	// Represent the index of box(tile) selected by user and pc
	const [tileIndex, setTileIndex] = useState(null);

	function handleTurn() {
		setTurn((prevTurn) => (prevTurn === 'x' ? 'o' : 'x'));
	}

	function handleTileIndex(index) {
		if (index === tileIndex) return;
		setTileIndex(index);
	}

	useEffect(() => {
		if (turn === humanTurn) return;
		setTimeout(() => {
			const randIndex = randomIndex(boardState);
			console.log(randIndex);
			setTileIndex(randIndex);
		}, 3000);
	}, [turn, humanTurn, boardState]);

	useEffect(() => {
		if (tileIndex === null) return;
		setBoardState((boardState) =>
			boardState.map((state, i) =>
				tileIndex === i ? (boardState[tileIndex] = turn) : state
			)
		);
	}, [tileIndex, turn]);

	return (
		<>
			<div className='game-info'>
				<GameLogo />
				<TurnIndicator
					currentPlayer={turn}
					handleTileIndex={setTileIndex}
					toggleTurn={handleTurn}
					tileIndex={tileIndex}
				/>
				<RefreshButton />
			</div>
			<div className='board'>
				{boardState.map((option, i) => (
					<Square
						key={i}
						getCurrentBoxIndex={() => handleTileIndex(i)}
						option={option}
						isPcTurn={turn !== humanTurn}
					/>
				))}
			</div>
			<ScoreDashboard />
		</>
	);
}

export default Board;
