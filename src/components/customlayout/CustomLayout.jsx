// src/components/layout/CustomLayout.jsx
import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import Navbar from "../layout/Navbar/Navbar";
import Footer from "../layout/Footer";
import CustomNavbar from "./CustomNavbar";
import CustomSidebar from "./CustomSidebar";
import CustomFooter from "./CustomFooter";

const CustomLayout = ({ children }) => {
	const { user } = useAuth();

	if (user) {
		// Layout for authenticated users
		return (
			<div className="authenticated-layout">
				<CustomNavbar />
				<CustomSidebar />
				<main>{children}</main>
				<CustomFooter />
			</div>
		);
	}

	// Layout for unauthenticated users
	return (
		<div className="unauthenticated-layout">
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default CustomLayout;
