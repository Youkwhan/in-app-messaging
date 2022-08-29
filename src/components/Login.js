import React from "react";
import { GoogleOutlined } from "@ant-design/icons";

function Login() {
	return (
		<div id="login-page">
			<div id="login-card">
				<h2>Welcome to Chat</h2>
				<div className="login-button google">
					<GoogleOutlined /> Sign In With Google
				</div>
			</div>
		</div>
	);
}

export default Login;
