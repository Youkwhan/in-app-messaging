import React from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";

function Chat() {
	const { logOut, user } = UserAuth();

	const handleSignOut = async () => {
		try {
			await logOut();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="chats-page">
			<div className="nav-bar">
				<div className="logo-tab">Chats</div>
				<div className="logout-tab">
					<button onClick={handleSignOut}>Logout</button>
				</div>
			</div>
      <ChatEngine 
        height="calc(100vh -66px)"
        projectID=""
      />
		</div>
	);
}

export default Chat;
