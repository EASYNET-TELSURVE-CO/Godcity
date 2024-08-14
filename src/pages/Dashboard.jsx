// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Dashboard = () => {
	const { user } = useAuth();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (!user) {
			navigate("/");
		} else {
			setIsLoading(false);
		}
	}, [user, navigate]);

	if (isLoading) {
		return <div>Loading...</div>; // Or any loading spinner
	}

	return (
		<div className="flex flex-1 flex-col min-h-screen justify-center items-center">
			<h1>Welcome to the Dashboard</h1>
			<p>This is a protected route that only authenticated users can see.</p>
		</div>
	);
};

export default Dashboard;
