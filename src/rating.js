import iconCommunities from './images/icon-communities.svg';
import iconMessages from './images/icon-messages.svg';

const Rating = ()=> {
	return (

		<div className="rating-sec">
			<div>
				<img src = {iconCommunities} alt='community-icon'/>
				<h1>1.4k+</h1>
				<p className="rating_text1">Communities Formed</p>
			</div>
			<div>
			<img src = {iconMessages} alt='message-icon'/>
				<h1>2.7m+</h1>
				<p className="rating_text2">Messages Sent</p>
			</div>
		</div>

	);
}

export default Rating;
