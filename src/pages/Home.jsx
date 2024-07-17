// src/pages/Home.jsx
import React, { useEffect } from "react";
import { IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EventIcon from "@mui/icons-material/Event";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EmailIcon from "@mui/icons-material/Email";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router";

const Home = () => {
	const { user } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (user) {
			navigate("/dashboard");
		}
	}, [user, navigate]);
	
	return (
		<div>
			<section className="bg-background dark:bg-background-dark text-center py-20">
				<h1 className="text-5xl font-bold mb-4">Welcome to GodCity</h1>
				<p className="text-xl mb-8">Unify. Serve. Inspire.</p>
				<button className="bg-primary-dark text-white px-6 py-4 rounded-full hover:bg-primary-dark transition">
					Get Started
				</button>
			</section>
			<section className="bg-background dark:bg-background-dark py-20">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold text-center mb-10">Features</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						<FeatureCard
							icon={PersonIcon}
							title="Member Management"
							description="Efficiently manage your church members."
						/>
						<FeatureCard
							icon={EventIcon}
							title="Event Management"
							description="Organize and manage church events seamlessly."
						/>
						<FeatureCard
							icon={AttachMoneyIcon}
							title="Financial Management"
							description="Keep track of donations and finances."
						/>
						<FeatureCard
							icon={EmailIcon}
							title="Communication"
							description="Send notifications and newsletters."
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

const FeatureCard = ({ icon: Icon, title, description }) => {
	return (
		<div className="bg-white p-8 rounded-2xl shadow-lg text-center">
			<IconButton className="text-primary text-4xl mb-4 mx-auto">
				<Icon fontSize="large" />
			</IconButton>
			<h3 className="text-xl text-contrast-dark dark:text-contrast font-semibold mb-2">
				{title}
			</h3>
			<p className="text-gray-600">{description}</p>
		</div>
	);
};

export default Home;
