import { useGameState } from '../../context/GameStateProvider';
import Button from '../../ui/Button';
import PlayerIcon from '../../ui/PlayerIcon';

function PlayerSelector({ option, setOption }) {
	return (
		<div className='options-container'>
			<p className='options-description'>Pick Player</p>
			<div className='options-box'>
				<Button
					customClass={` option_btn ${
						option === 'x' ? 'active' : ''
					}`}
					size='medium'
					handleClick={() => setOption('x')}
				>
					<PlayerIcon player='x' type='bold' />
				</Button>
				<Button
					customClass={` option_btn ${
						option === 'o' ? 'active' : ''
					}`}
					size='medium'
					handleClick={() => setOption('o')}
				>
					<PlayerIcon player='o' type='bold' />
				</Button>
			</div>
		</div>
	);
}

export default PlayerSelector;
