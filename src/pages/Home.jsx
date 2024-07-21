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
			<section
				className="flex flex-col bg-hero dark:bg-hero_dark bg-cover min-h-screen dark:text-contrast text-center
			space-y-4 xs:space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 xl:space-y-14 2xl:space-y-16 justify-center items-center py-20"
			>
				<div className="bg-white p-8 rounded-3xl bg-opacity-25">
					<h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold mb-4">
						Welcome to GodCi†y
					</h1>
					<p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-8">
						Unify. Serve. Inspire.
					</p>
					<p className="p-10 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl italic relative z-10 font-light text-primary">
						"For where two or three gather in my name, there am I with them." –
						Matthew 18:20
					</p>
					<button className="bg-primary text-white text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 2xl:px-16 py-2 xs:py-3 sm:py-4 md:py-5 lg:py-6 xl:py-7 2xl:py-8 rounded-full hover:bg-primary-dark transition">
						Get Started
					</button>
				</div>
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
		<div className="bg-none p-8 rounded-2xl shadow-lg text-center flex flex-col justify-between">
			<IconButton className="text-4xl mb-4 mx-auto">
				<Icon fontSize="large"
				style={{ color: '#c0a700' }}
				/>
			</IconButton>
			<h3 className="text-xl text-contrast dark:text-contrast-dark font-semibold mb-2">
				{title}
			</h3>
			<p className="text-gray-600 dark:text-gray-400 font-light">
				{description}
			</p>
		</div>
	);
};

export default Home;
