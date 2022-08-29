import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { AuthContextProvider } from "./context/AuthContext";
import Chats from "./components/Chats";
import Login from "./components/Login";

function App() {
	return (
		<div style={{ fontFamily: "Avenir" }}>
			<Router>
				<AuthContextProvider>
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/chats" element={<Chats />} />
					</Routes>
				</AuthContextProvider>
			</Router>
		</div>
	);
}

export default App;
