import Button from './Button';
import PlayerIcon from './PlayerIcon';

function Popup({ type, playerMarker }) {
	if (type === 'winner')
		return (
			<div className='popup'>
				<p className='popup__text'>You won!</p>
				<p className='popup__describe'>
					<PlayerIcon player={playerMarker} type='extraBold' />
					<span>takes the round</span>
				</p>
				<div className='popup__btn-box'>
					<Button
						size='medium'
						customClass='popup__btn popup__btn--quit-game'
					>
						Quite
					</Button>
					<Button
						size='medium'
						customClass='popup__btn popup__btn--next-round'
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
					>
						Quite
					</Button>
					<Button
						size='medium'
						customClass='popup__btn popup__btn--play-again'
					>
						Play Again
					</Button>
				</div>
			</div>
		);
}

export default Popup;
