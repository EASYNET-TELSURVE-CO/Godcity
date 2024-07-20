import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsFillMenuButtonFill, BsFillMenuButtonWideFill } from "react-icons/bs";
import { menuItems, userDropdownItems } from "./navbarData";
import UserSection from "./UserSection";
import { useAuth } from "../../../contexts/AuthContext";

const Menu = ({ to, label }) => {
	const location = useLocation();

	return (
		<li>
			<Link
				to={to}
				className={`block py-2 md:py-0 px-3 my-1 md:my-0 md:p-0 ${
					location.pathname === to
						? "bg-primary text-contrast-dark font-medium rounded-2xl md:bg-transparent md:text-secondary"
						: "rounded-2xl font-normal hover:text-secondary hover:bg-primary/75 md:hover:bg-transparent dark:md:hover:text-secondary dark:hover:text-contrast-dark md:dark:hover:bg-transparent dark:border-slate-700"
				}`}
				aria-current={location.pathname === to ? "page" : undefined}
			>
				{label}
			</Link>
		</li>
	);
};

const MenuButton = ({ isMenuOpen, toggleMenu }) => {
	return (
		<button
			data-collapse-toggle="navbar-cta"
			type="button"
			className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary rounded-lg md:hidden hover:bg-primary/10 dark:hover:bg-primary-dark/50 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary/85"
			aria-controls="navbar-cta"
			aria-expanded="false"
			onClick={toggleMenu}
		>
			<span className="sr-only">Open main menu</span>
			{isMenuOpen ? (
				<BsFillMenuButtonWideFill size={20} />
			) : (
				<BsFillMenuButtonFill size={19} />
			)}
		</button>
	);
};

const Navbar = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);
	const [isLoggedIn, setLoggedIn] = useState(false);
	const [isUserOpen, setUserOpen] = useState(false);
	const [navbarOpacity, setNavbarOpacity] = useState(1);

	const menuRef = useRef(null);
	const userDropdownRef = useRef(null);

	const { user } = useAuth();

	useEffect(() => {
		if (user) {
			setLoggedIn(true);
		} else {
			setLoggedIn(false); // Reset isLoggedIn state when user logs out
		}
	}, [user]);

	const toggleMenu = (event) => {
		event.stopPropagation(); // Stop the event from propagating
		setMenuOpen(!isMenuOpen);
		setUserOpen(false);
	};

	const toggleUserDropdown = (event) => {
		event.stopPropagation();
		if (isLoggedIn) {
			setUserOpen(!isUserOpen);
		}
	};

	const handleClickOutside = (event) => {
		if (
			!menuRef?.current?.contains(event.target) &&
			!userDropdownRef?.current?.contains(event.target)
		) {
			setMenuOpen(false);
			setUserOpen(false);
		}
	};

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		// Adjust opacity based on the scroll position
		if (window.scrollY > 400) {
			setMenuOpen(false);
		}
		const maxScroll = isMenuOpen ? 2000 : 200; // Adjust this value based on when you want the opacity to start changing
		const opacity = Math.min(1, 1 - scrollPosition / maxScroll);
		setNavbarOpacity(opacity);
	};

	useEffect(() => {
		document.addEventListener("click", handleClickOutside);
		window.addEventListener("scroll", handleScroll);
		return () => {
			document.removeEventListener("click", handleClickOutside);
			window.removeEventListener("scroll", handleScroll);
		};
	}, [handleClickOutside]);

	return (
		<nav
			className="bg-background dark:bg-background-dark sticky top-0 z-50"
			style={{ opacity: navbarOpacity }}
		>
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<Link
					to="/"
					className="text-xl font-semibold flex items-center justify-center"
				>
					<img src={"/GC.png"} alt="KlevaKit Logo" className="h-6 w-6 mr-2" />
					<Link to="/" className="hover:underline">
						GodCi†y
					</Link>
				</Link>
				<div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
					<UserSection
						isLoggedIn={isLoggedIn}
						isUserOpen={isUserOpen}
						toggleUserDropdown={toggleUserDropdown}
						userDropdownRef={userDropdownRef}
						userDropdownItems={userDropdownItems}
					/>
					{/* <DarkModeToggle /> */}
					<MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
				</div>
				<div
					className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
						isMenuOpen
							? "block absolute right-0 top-[71px] p-4 bg-background/50 dark:bg-background-dark/50 rounded-b-3xl opacity-95"
							: "hidden"
					}`}
					id="navbar-cta"
					ref={menuRef}
				>
					<ul className="flex flex-col font-medium p-6 md:p-0 my-4 md:my-0 bg-background dark:bg-background-dark rounded-3xl md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-warm dark:bg-background-dark/85md:dark:bg-background-dark/85 shadow md:shadow-none">
						{menuItems.map((item) => (
							<Menu key={item.to} to={item.to} label={item.label} />
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
