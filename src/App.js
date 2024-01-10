import './index.css';

import { useState } from 'react';
import { useGameState } from './context/GameStateProvider';

import MobileView from './ui/MobileView';
import GameStartScreen from './components/GameStart/GameStartScreen';
import QuotesBox from './components/QuotesBox/QuotesBox';
import Board from './components/Board/Board';
import GameLogo from './ui/GameLogo';
import PlayerSelector from './components/GameStart/PlayerSelector';
import GameModeSelector from './components/GameStart/GameModeSelector';

function App() {
	const [humanSelectedOption, setHumanSelectedOption] = useState('x');
	const { gameStatus, dispatch } = useGameState();

	function handleStartGame() {
		dispatch({
			type: 'game/start',
			payload: { option: humanSelectedOption, status: 'gameStart' },
		});
	}

	return (
		<section className='main-container'>
			<QuotesBox />
			<MobileView>
				{gameStatus === 'gameStart' ? (
					<Board />
				) : (
					<GameStartScreen>
						<GameLogo />
						<PlayerSelector
							option={humanSelectedOption}
							setOption={setHumanSelectedOption}
						/>
						<GameModeSelector handleClick={handleStartGame} />
					</GameStartScreen>
				)}
			</MobileView>
		</section>
	);
}

export default App;
