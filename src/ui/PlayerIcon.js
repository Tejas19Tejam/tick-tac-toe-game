function PlayerIcon({ player, type }) {
	const iconType = `icon-${type}`;

	if (player === 'x')
		return (
			<ion-icon
				name='close-sharp'
				class={`icon x-icon ${iconType}`}
			></ion-icon>
		);

	return (
		<ion-icon
			name='ellipse-sharp'
			class={`icon o-icon ${iconType}`}
		></ion-icon>
	);
}

export default PlayerIcon;
