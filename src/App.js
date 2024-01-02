import './index.css';

import MobileView from './ui/MobileView';
import GameStartScreen from './components/GameStart/GameStartScreen';
import QuotesBox from './components/QuotesBox/QuotesBox';
import Board from './components/Board/Board';
import GameLogo from './ui/GameLogo';
import PlayerSelector from './components/GameStart/PlayerSelector';
import GameModeSelector from './components/GameStart/GameModeSelector';
import { useState } from 'react';

function App() {
	const [isGameStarted, setIsGameStarted] = useState(false);
	const [humanSelectedOption, setHumanSelectedOption] = useState('x');

	function handleStartGame() {
		setIsGameStarted(true);
	}

	return (
		<section className='main-container'>
			<QuotesBox />
			<MobileView>
				{isGameStarted ? (
					<Board humanTurn={humanSelectedOption} />
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
