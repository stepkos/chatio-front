import React, { useState } from 'react';
import LeftMenu from './../layout/LeftMenu';
import Conversations from './../layout/Conversations';
import Chat from './../layout/Chat';


const ChatRWD = () => {
	
	return (
		<>
			<LeftMenu />
			<Conversations />
			<Chat />
    	</>
  	);
}

export default ChatRWD;
