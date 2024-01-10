import React from 'react';
import ReactDOM from 'react-dom/client';
import { GameStateProvider } from './context/GameStateProvider';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<GameStateProvider>
			<App />
		</GameStateProvider>
	</React.StrictMode>
);
