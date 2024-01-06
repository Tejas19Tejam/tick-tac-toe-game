import { useEffect, useState } from 'react';
import Square from './Square';
import { makeComputerMove } from '../../utils/helper';
import ScoreDashboard from './ScoreDashboard';
import StatusBar from './StatusBar';
import { checkForWinner } from '../../utils/checkForWinner';
import { checkForTie } from '../../utils/checkForTie';

import Popup from '../../ui/Popup';

//  Represents the initial state of the board
const initialBoardState = ['', '', '', '', '', '', '', '', ''];

function Board({ humanTurn }) {
	// Represent the current player's turn
	// humanTurn = human Turn
	const [turn, setTurn] = useState(humanTurn);

	// Represents the overall state of the board, including occupied positions.
	const [boardState, setBoardState] = useState(initialBoardState);

	// Represent the index of box(tile) selected by user and pc
	const [tileIndex, setTileIndex] = useState(null);

	const [tie, setTie] = useState(false);

	console.log(tie);
	const [winner, setWinner] = useState('');

	function handleTurn() {
		setTurn((prevTurn) => (prevTurn === 'x' ? 'o' : 'x'));
	}

	function handleTileIndex(index) {
		if (index === tileIndex) return;
		setTileIndex(index);
	}

	// This effect run when tileIndex changes
	// 1. When user click on tile
	// 2. When computer select index.
	useEffect(() => {
		if (tileIndex === null) return;
		setBoardState((boardState) =>
			boardState.map((state, i) =>
				tileIndex === i ? (boardState[tileIndex] = turn) : state
			)
		);
	}, [tileIndex, turn]);

	// After boardState changes , check for winning if true then set winner to curTurn
	// If , not winning chances then  check for tie chances
	// Else toggleTurn
	useEffect(() => {
		if (checkForWinner(boardState, turn)) setWinner(turn);
		if (checkForTie(boardState)) setTie(true);
		handleTurn();
		return () => {
			setTileIndex(null);
		};
	}, [boardState]);

	useEffect(() => {
		if (turn === humanTurn) return;
		setTimeout(() => {
			const index = makeComputerMove(boardState, turn);
			console.log(index);
			setTileIndex(index);
		}, 3000);
	}, [turn, humanTurn]);

	return (
		<>
			<StatusBar currentPlayer={turn} />

			{!winner && !tie && (
				<div className='board'>
					{boardState.map((option, i) => (
						<Square
							key={i}
							getCurrentBoxIndex={() => handleTileIndex(i)}
							option={option}
							isPcTurn={turn !== humanTurn}
							winner={winner}
						/>
					))}
				</div>
			)}

			{winner && <Popup type='winner' playerMarker={winner} />}
			{tie && <Popup type='warning' />}
			<ScoreDashboard />
		</>
	);
}

export default Board;
