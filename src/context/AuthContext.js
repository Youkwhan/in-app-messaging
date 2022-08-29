import React, { useContext, useState, useEffect, createContext } from "react";
import {
	GoogleAuthProvider,
	signInWithRedirect,
	onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	const googleSignIn = () => {
		const provider = new GoogleAuthProvider();
		signInWithRedirect(auth, provider);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			console.log("User", currentUser);
			setLoading(false);
			if (user && navigate("/chats"));
		});
		return () => {
			unsubscribe();
		};
	}, [user, navigate]);

	return (
		<AuthContext.Provider value={{ googleSignIn, user }}>
			{!loading && children}
		</AuthContext.Provider>
	);
};

export const UserAuth = () => {
	return useContext(AuthContext);
};
