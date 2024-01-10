import { useGameState } from '../../context/GameStateProvider';

function ScoreDashboard() {
	const { humanScore, computerScore, tieNumber } = useGameState();

	return (
		<div className='dashboard'>
			<div className='dashboard-box'>
				<span className='dashboard-text'>(x) You</span>
				<span className='dashboard-score'>{humanScore}</span>
			</div>
			<div className='dashboard-box'>
				<span className='dashboard-text'>TIES</span>
				<span className='dashboard-score'>{tieNumber}</span>
			</div>
			<div className='dashboard-box'>
				<span className='dashboard-text'>(O) pc</span>
				<span className='dashboard-score'>{computerScore}</span>
			</div>
		</div>
	);
}

export default ScoreDashboard;
