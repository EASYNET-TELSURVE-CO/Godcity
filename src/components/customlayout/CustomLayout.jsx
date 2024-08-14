// src/components/layout/CustomLayout.jsx
import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import Navbar from "../layout/Navbar/Navbar";
import Footer from "../layout/Footer";
import CustomNavbar from "./CustomNavbar";
import CustomSidebar from "./CustomSidebar";
import CustomFooter from "./CustomFooter";
import ScrollToTop from "../layout/ScrollToTop";

const CustomLayout = ({ children }) => {
	const { user } = useAuth();
	const [currentSection, setCurrentSection] = useState("hero");
	const sectionRefs = useRef({
		hero: React.createRef(),
		features: React.createRef(),
		cta: React.createRef(),
		sermon: React.createRef(),
		banner: React.createRef(),
		aboutUs: React.createRef(),
		testimonials: React.createRef(),
		events: React.createRef(),
		payment: React.createRef(),
		contact: React.createRef(),
	});

	const childrenWithProps = React.Children.map(children, (child) => {
		if (React.isValidElement(child)) {
			return React.cloneElement(child, { sectionRefs, setCurrentSection });
		}
		return child;
	});

	if (user) {
		// Layout for authenticated users
		return (
			<div className="authenticated-layout">
				<CustomNavbar />
				<CustomSidebar />
				<main>{childrenWithProps}</main>
				<CustomFooter />
				<ScrollToTop />
			</div>
		);
	}

	// Layout for unauthenticated users
	return (
		<div className="unauthenticated-layout">
			<Navbar sectionRefs={sectionRefs} currentSection={currentSection} />
			<main className="min-h-screen">{childrenWithProps}</main>
			<Footer />
			<ScrollToTop />
		</div>
	);
};

export default CustomLayout;
