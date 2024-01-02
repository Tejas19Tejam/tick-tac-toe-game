function ScoreDashboard() {
	return (
		<div className='dashboard'>
			<div className='dashboard-box'>
				<span className='dashboard-text'>(x) You</span>
				<span className='dashboard-score'>0</span>
			</div>
			<div className='dashboard-box'>
				<span className='dashboard-text'>TIES</span>
				<span className='dashboard-score'>0</span>
			</div>
			<div className='dashboard-box'>
				<span className='dashboard-text'>(O) pc</span>
				<span className='dashboard-score'>0</span>
			</div>
		</div>
	);
}

export default ScoreDashboard;
