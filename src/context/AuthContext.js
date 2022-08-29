import React, { useContext, useState, useEffect, createContext } from "react";
import {
	GoogleAuthProvider,
	signInWithRedirect,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	const googleSignIn = () => {
		const provider = new GoogleAuthProvider();
		signInWithRedirect(auth, provider);
	};

	const logOut = () => {
		signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			console.log("User", currentUser);
			setLoading(false);
			if (user != null) {
				navigate("/chats");
			}
		});
		return () => {
			unsubscribe();
		};
	}, [user, navigate]);

	return (
		<AuthContext.Provider value={{ googleSignIn, logOut, user }}>
			{!loading && children}
		</AuthContext.Provider>
	);
};

export const UserAuth = () => {
	return useContext(AuthContext);
};
