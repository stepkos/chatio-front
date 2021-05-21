import React, { useState } from 'react';
import LeftMenu from './../layout/LeftMenu';
import Conversations from './../layout/Conversations';
import Chat from './../layout/Chat';


const ChatRWD = () => {

	const [smallVersion, setSmallVersion] = useState(window.innerWidth < 1050);

	window.addEventListener('resize', () => {
		let sv = window.innerWidth < 1050;
		
		if (sv !== smallVersion) 
			setSmallVersion(sv);
	});

	return (
		<>
			{
				(smallVersion) ?
				<>
					<Conversations />
					<Chat />
				</>
				:
				<>
					<LeftMenu />
					<Conversations />
					<Chat />
				</>
			}
    	</>
  	);
}

export default ChatRWD;
