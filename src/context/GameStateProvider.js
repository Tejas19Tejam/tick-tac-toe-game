import { createContext, useContext, useReducer } from 'react';

// GameStatus ===>  newGame , start , Refresh ,Quite
// Match status ===> newMatch , Win , Tie , newRound

// Crate game context
const GameContext = createContext();

const initialState = {
	gameStatus: 'newGame',
	matchStatus: '',
	humanSelectedOption: null,
	currentTurn: '',
	winner: '',
	computerScore: 0,
	humanScore: 0,
	tieNumber: 0,
};

// Create Provider

function provider(state, action) {
	switch (action.type) {
		case 'game/new':
			return initialState;
		case 'game/start':
			return {
				...state,
				humanSelectedOption: action.payload.option,
				gameStatus: action.payload.status,
				currentTurn: action.payload.option,
				matchStatus: 'newMatch',
			};
		case 'turn/toggle':
			return {
				...state,
				currentTurn: state.currentTurn === 'x' ? 'o' : 'x',
			};
		case 'match/win':
			return {
				...state,
				winner: action.payload.winner,
				matchStatus: action.payload.status,
				humanScore: state.humanScore + action.payload.humanScore,
				computerScore:
					state.computerScore + action.payload.computerScore,
			};
		case 'match/tie':
			return {
				...state,
				matchStatus: action.payload.status,
				tieNumber: state.tieNumber++,
			};
		case 'match/newRound':
			return {
				...state,
				currentTurn: state.humanSelectedOption,
				matchStatus: 'newRound',
				winner: '',
			};

		case 'match/new':
			return {
				...state,
				currentTurn: state.humanSelectedOption,
				matchStatus: 'newMatch',
				winner: '',
				computerScore: 0,
				humanScore: 0,
			};

		default:
			throw new Error('Unknown action');
	}
}

function GameStateProvider({ children }) {
	const [
		{
			gameStatus,
			matchStatus,
			humanSelectedOption,
			currentTurn,
			winner,
			humanScore,
			computerScore,
			tieNumber,
		},
		dispatch,
	] = useReducer(provider, initialState);

	return (
		<GameContext.Provider
			value={{
				gameStatus,
				matchStatus,
				humanSelectedOption,
				currentTurn,
				winner,
				humanScore,
				computerScore,
				tieNumber,
				dispatch,
			}}
		>
			{children}
		</GameContext.Provider>
	);
}

// Action creator function's

// When match win
export function matchWinAction(winner, humanOption) {
	let computerScore = 0;
	let humanScore = 0;

	if (winner !== humanOption) computerScore++;
	if (winner === humanOption) humanScore++;

	return {
		type: 'match/win',
		payload: { status: 'win', winner, humanScore, computerScore },
	};
}

// When match tie
export function matchTieAction() {
	return {
		type: 'match/tie',
		payload: { status: 'tie' },
	};
}

// If user click on Next round button
// Game score remains same and store in local storage
export function newRoundAction(humanScore, computerScore, tieNumber) {
	// Set items to local storage
	sessionStorage.setItem(
		'matchScore',
		JSON.stringify({ computerScore, humanScore, tieNumber })
	);

	return { type: 'match/newRound' };
}

// If user click on PlayAgain button
export function newMatchAction(tieNumber) {
	// Set items to local storage
	sessionStorage.setItem(
		'matchScore',
		JSON.stringify({ computerScore: 0, humanScore: 0, tieNumber })
	);
	return { type: 'match/new' };
}

// If user click on Quite Game button
// Game score reset and remove it from local storage
export function newGameAction() {
	sessionStorage.removeItem('matchScore');
	return { type: 'game/new' };
}

// Custom hook
function useGameState() {
	const context = useContext(GameContext);

	if (context === undefined)
		throw new Error('You are using the context outside the provider');
	return context;
}

export { GameStateProvider, useGameState };
