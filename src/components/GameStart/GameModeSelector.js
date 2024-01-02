import Button from '../../ui/Button';
import Invite from './Invite';

function GameModeSelector({ handleClick }) {
	return (
		<div className='button-container'>
			<Button
				customClass='btn-with-cpu'
				size='large'
				handleClick={() => handleClick()}
			>
				<span>NEW GAME (VS CPU)</span>
			</Button>
			<Button customClass='btn-with-human' size='large'>
				<span>NEW GAME (VS HUMAN) Coming soon</span>
			</Button>
			<Invite />
		</div>
	);
}

export default GameModeSelector;
