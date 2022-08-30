import React, { useRef, useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { ChatEngine } from "react-chat-engine";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Chat() {
	const { logOut, user } = UserAuth();
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate;
	console.log(user);

	const handleSignOut = async () => {
		try {
			await logOut();
		} catch (error) {
			console.log(error);
		}
	};

	//get user photo
	const getFile = async (url) => {
		const response = await fetch(url);
		const data = await response.blob();

		return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
	};

	useEffect(() => {
		if (!user) {
			navigate("/");
			return;
		}

		// get existing user else catch create one
		axios
			.get("https://api.chatengine.io/users/me", {
				headers: {
					"project-id": "d2a3178c-bdd1-49f2-8c72-f0753a50bbdc",
					"user-name": user.email,
					"user-secret": user.uid,
				},
			})
			.then(() => {
				setLoading(false);
			})
			.catch(() => {
				let formdata = new FormData();
				formdata.append("email", user.email);
				formdata.append("username", user.email);
				formdata.append("secret", user.uid);

				getFile(user.photoURL).then((avatar) => {
					formdata.append("avatar", avatar, avatar.name);

					axios
						.post("https://api.chatengine.io/users/", formdata, {
							headers: {
								"private-key": "62c51261-6195-406f-9b66-9b8db1e3cf8f",
							},
						})
						.then(() => setLoading(false))
						.catch((error) => console.log(error));
				});
			});
	}, [user, navigate]);

	// if(!user || loading) return "Loading..."

	return (
		<div className="chats-page">
			<div className="nav-bar">
				<div className="logo-tab">Chats</div>
				<div className="logout-tab" onClick={handleSignOut}>
					Logout
				</div>
			</div>
			<ChatEngine
				height="calc(100vh -66px)"
				projectID="d2a3178c-bdd1-49f2-8c72-f0753a50bbdc"
				userName={user.email}
				userSecret={user.uid}
			/>
		</div>
	);
}

export default Chat;
