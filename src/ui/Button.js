function Button({ children, customClass, size, handleClick, isDisabled }) {
	const styledMediumBtn = `${customClass} medium_btn`;

	const styledLargeBtn = `${customClass} large_btn`;

	const styledSmallBtn = `${customClass} small_btn`;

	if (size === 'medium')
		return (
			<button
				className={styledMediumBtn}
				onClick={handleClick}
				disabled={isDisabled}
			>
				{children}
			</button>
		);

	if (size === 'large')
		return (
			<button
				className={styledLargeBtn}
				onClick={handleClick}
				disabled={isDisabled}
			>
				{children}
			</button>
		);

	return (
		<button
			className={styledSmallBtn}
			onClick={handleClick}
			disabled={isDisabled}
		>
			{children}
		</button>
	);
}

export default Button;
