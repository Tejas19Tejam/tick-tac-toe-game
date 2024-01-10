import {
	newMatchAction,
	useGameState,
	newGameAction,
	newRoundAction,
} from '../context/GameStateProvider';
import Button from './Button';
import PlayerIcon from './PlayerIcon';

function Popup({ type }) {
	const {
		winner: playerMarker,
		humanSelectedOption,
		humanScore,
		computerScore,
		tieNumber,
		dispatch,
	} = useGameState();

	if (type === 'winner')
		return (
			<div className='popup'>
				<p className='popup__text'>
					You {playerMarker === humanSelectedOption ? 'win' : 'loss'}{' '}
					!
				</p>
				<p className='popup__describe'>
					<PlayerIcon player={playerMarker} type='extraBold' />
					<span>takes the round</span>
				</p>
				<div className='popup__btn-box'>
					<Button
						size='medium'
						customClass='popup__btn popup__btn--quit-game'
						handleClick={() => dispatch(newGameAction())}
					>
						Quite
					</Button>
					<Button
						size='medium'
						customClass='popup__btn popup__btn--next-round'
						handleClick={() =>
							dispatch(
								newRoundAction(
									humanScore,
									computerScore,
									tieNumber
								)
							)
						}
					>
						Next Round
					</Button>
				</div>
			</div>
		);

	if (type === 'warning')
		return (
			<div className='popup'>
				<p className='popup__describe'>
					<span>Do you want to quit ?</span>
				</p>
				<div className='popup__btn-box'>
					<Button
						size='medium'
						customClass='popup__btn popup__btn--quit-game'
						handleClick={() => dispatch(newGameAction())}
					>
						Quite
					</Button>
					<Button
						size='medium'
						customClass='popup__btn popup__btn--play-again'
						handleClick={() => dispatch(newMatchAction(tieNumber))}
					>
						Play Again
					</Button>
				</div>
			</div>
		);
}

export default Popup;
