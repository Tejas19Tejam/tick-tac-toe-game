import { useEffect, useMemo, useState } from 'react';

import Square from './Square';
import { makeComputerMove } from '../../utils/helper';
import ScoreDashboard from './ScoreDashboard';
import StatusBar from './StatusBar';
import { checkForWinner } from '../../utils/checkForWinner';
import { checkForTie } from '../../utils/checkForTie';
import { checkForEmpty } from '../../utils/checkForEmpty';

import Popup from '../../ui/Popup';
import { useGameState } from '../../context/GameStateProvider';
import {
	matchWinAction,
	matchTieAction,
} from '../../context/GameStateProvider';

//  Represents the initial state of the board
const initialBoardState = ['', '', '', '', '', '', '', '', ''];

function Board() {
	const { currentTurn, humanSelectedOption, winner, matchStatus, dispatch } =
		useGameState();

	// Represents the overall state of the board, including occupied positions.
	const [boardState, setBoardState] = useState(initialBoardState);

	// tileIndex =  box(tile) selected by user and pc
	// This handler run when tileIndex changes
	// 1. When user click on tile
	// 2. When computer select index.
	function handleBoardState(tileIndex) {
		setBoardState((boardState) =>
			boardState.map((state, i) =>
				tileIndex === i ? (boardState[tileIndex] = currentTurn) : state
			)
		);
	}

	function handleWin() {
		// Dispatch win action
		dispatch(matchWinAction(currentTurn, humanSelectedOption));
	}

	function handleTie() {
		dispatch(matchTieAction());
	}

	// If match status is newRound this effect will run
	useEffect(() => {
		if (matchStatus !== 'newRound') return;
		setBoardState((prevState) => prevState.map((state) => (state = '')));
	}, [matchStatus]);

	// If match status is newMatch this effect will run
	useEffect(() => {
		if (matchStatus !== 'newMatch') return;
		setBoardState((prevState) => prevState.map((state) => (state = '')));
	}, [matchStatus]);

	// After boardState changes , check for 1. Win 2. Tie
	// Else toggleTurn

	useEffect(
		function () {
			// If boardState is empty then return
			if (checkForEmpty(boardState)) return;
			if (checkForWinner(boardState, currentTurn)) return handleWin();
			if (checkForTie(boardState)) return handleTie();
			dispatch({ type: 'turn/toggle' });
		},
		[boardState]
	);

	// Make a computer move and set the tile index.
	useEffect(() => {
		if (currentTurn === humanSelectedOption) return;
		setTimeout(() => {
			const index = makeComputerMove(boardState, currentTurn);
			handleBoardState(index);
		}, 3000);
	}, [currentTurn, humanSelectedOption]);

	return (
		<>
			<StatusBar />
			{!winner && matchStatus !== 'tie' && (
				<div className='board'>
					{boardState.map((option, i) => (
						<Square
							key={i}
							// getCurrentBoxIndex={() => handleTileIndex(i)}
							getCurrentBoxIndex={() => handleBoardState(i)}
							option={option}
						/>
					))}
				</div>
			)}

			{winner && <Popup type='winner' />}
			{matchStatus === 'tie' && <Popup type='warning' />}
			<ScoreDashboard />
		</>
	);
}

export default Board;
