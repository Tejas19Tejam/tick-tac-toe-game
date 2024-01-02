import PlayerIcon from './PlayerIcon';

function GameLogo() {
	return (
		<div className='x-o-icons'>
			<PlayerIcon player='x' type='bold' />
			<PlayerIcon player='o' type='bold' />
		</div>
	);
}

export default GameLogo;
