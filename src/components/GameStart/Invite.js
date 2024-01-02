import { useState } from 'react';
import Button from '../../ui/Button';

function Invite() {
	const [showPopup, setShowPopup] = useState(false);
	const [invitationLink, setInvitationLink] = useState(
		'https://your-invitation-link'
	);

	// Copy link to clipboard
	const handleCopy = () => {
		navigator.clipboard
			.writeText(invitationLink)
			.then(() => {
				setShowPopup(true);
				setTimeout(() => {
					setShowPopup(false);
				}, 3000);
			})
			.catch((error) => {
				console.error('Error copying link:', error);
			});
	};

	return (
		<Button
			customClass='btn-invite'
			size='large'
			handleClick={handleCopy}
			isDisabled={showPopup}
		>
			<span>Invite your friend</span>
			{showPopup && <div class='invite-popup'>Invite link copied</div>}
		</Button>
	);
}

export default Invite;
