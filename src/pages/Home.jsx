// src/pages/Home.jsx
import React from "react";
import { IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EventIcon from "@mui/icons-material/Event";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EmailIcon from "@mui/icons-material/Email";

const Home = () => {
	return (
		<div>
			<header className="bg-background-dark text-white p-4 flex justify-between items-center">
				<div className="flex items-center space-x-2">
					<img src="/GC.png" alt="GodCity Logo" className="w-8 h-8" />
					<span className="text-xl font-bold">GodCity</span>
				</div>
				<nav className="space-x-4">
					<a href="#" className="hover:underline">
						Home
					</a>
					<a href="#" className="hover:underline">
						Features
					</a>
					<a href="#" className="hover:underline">
						About
					</a>
					<a href="#" className="hover:underline">
						Contact
					</a>
				</nav>
			</header>

			<section className="bg-background text-center py-20">
				<h1 className="text-5xl font-bold mb-4">Welcome to GodCity</h1>
				<p className="text-xl mb-8">Unify. Serve. Inspire.</p>
				<button className="bg-primary-dark text-white px-6 py-4 rounded-full hover:bg-primary-dark transition">
					Get Started
				</button>
			</section>

			<section className="bg-gray-100 py-20">
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
		<div className="bg-white p-6 rounded-lg shadow-lg text-center">
			<IconButton className="text-primary text-4xl mb-4 mx-auto">
				<Icon fontSize="large" />
			</IconButton>
			<h3 className="text-xl font-semibold mb-2">{title}</h3>
			<p className="text-gray-600">{description}</p>
		</div>
	);
};

export default Home;
