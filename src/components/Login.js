import React from "react";
import { GoogleOutlined } from "@ant-design/icons";
import {UserAuth} from "../context/AuthContext"

function Login() {
   const {googleSignIn} = UserAuth();

   const handleGoogleSignIn = async () =>{
      try{
         await googleSignIn();
      } catch (error) {
         console.log(error)
      }
   }

	return (
		<div id="login-page">
			<div id="login-card">
				<h2>Welcome to Chat</h2>
				<div className="login-button google" onClick={handleGoogleSignIn}>
					<GoogleOutlined /> Sign In With Google
				</div>
			</div>
		</div>
	);
}

export default Login;
