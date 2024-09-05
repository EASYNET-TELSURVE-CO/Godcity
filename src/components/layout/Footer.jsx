import React from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "../theme/DarkModeToggle";
import { useTheme } from "../../contexts/ThemeContext";
import {
	AiFillFacebook,
	AiFillInstagram,
	AiFillTwitterSquare,
	AiOutlineMail,
	AiOutlinePhone,
} from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	const { isDarkMode } = useTheme();

	return (
		<footer className="border-t-[1px] text-contrast/85 dark:text-contrast-dark/50 border-slate-300 dark:border-background/15">
			<div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col justify-between">
				{/* Copyright and Logo */}
				<div className="flex justify-between text-xs md:text-sm sm:text-center font-light">
					<p className="py-2 font-medium">
						© {currentYear}{" "}
						<Link to="/" className="hover:underline">
							GodCi†y
						</Link>
					</p>
					<div className="flex items-center text-xs font-medium">
						<img
							src={
								isDarkMode
									? "/easynet/easynet.png"
									: "/easynet/easynet_dark.png"
							}
							alt="Logo"
							className="h-5 w-5"
						/>
						<a
							href="https://easynetsurveco.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline ml-1"
						>
							Designed by Iyayi Osa Ojogan.
						</a>
					</div>
					<DarkModeToggle />
				</div>

				<div className="flex lg:flex-row w-full justify-between p-1">
					<div>
						{/* Navigation Links */}
						<ul className="flex flex-col lg:flex-row items-start justify-start mt-4 w-full text-sm font-normal space-y-2 lg:space-y-0 lg:justify-center lg:space-x-4">
							<li>
								<Link to="#" className="hover:underline">
									About
								</Link>
							</li>
							<li>
								<Link to="#" className="hover:underline">
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link to="#" className="hover:underline">
									Licensing
								</Link>
							</li>
							<li>
								<Link to="#" className="hover:underline">
									Terms of Service
								</Link>
							</li>
						</ul>
					</div>
					<div>
						{/* Contact Information */}
						<ul className="flex flex-col items-start justify-start mt-4 space-y-2 sm:space-y-4 text-xs font-normal lg:flex-row lg:space-y-0 lg:justify-center lg:space-x-4">
							<li className="flex items-center">
								<MdLocationOn className="text-primary dark:text-primary-dark text-2xs" />
								<span className="ml-1">123 Main St, Cityville, Country</span>
							</li>
							<li className="flex items-center">
								<AiOutlineMail className="text-primary dark:text-primary-dark text-2xs" />
								<a
									href="mailto:info@example.com"
									className="hover:text-primary ml-1"
								>
									info@example.com
								</a>
							</li>
							<li className="flex items-center">
								<AiOutlinePhone className="text-primary dark:text-primary-dark text-2xs" />
								<span className="ml-1">(123) 456-7890</span>
							</li>
						</ul>
					</div>

					{/* Social Media Icons and Dark Mode Toggle */}
					<div className="flex items-start flex-col justify-start space-y-2 md:space-y-4 mt-4 lg:flex-row lg:space-y-0 lg:justify-center lg:space-x-4">
						<a
							href="https://www.facebook.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-primary"
						>
							<AiFillFacebook className="text-2xs" />
						</a>
						<a
							href="https://www.twitter.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-primary"
						>
							<BsTwitterX className="text-2xs" />
						</a>
						<a
							href="https://www.instagram.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-primary"
						>
							<AiFillInstagram className="text-2xs" />
						</a>
					</div>
				</div>

				{/* Newsletter Signup */}
				<div className="mt-4 text-sm w-full lg:flex lg:justify-between lg:max-w-md lg:items-center font-thin">
					<strong>Join our waitlist</strong>
					<form className="flex flex-col sm:flex-row mt-2 lg:mt-0">
						<input
							type="email"
							placeholder="Your email address"
							className="p-2 mb-2 sm:mb-0 sm:mr-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark"
						/>
						<button
							type="submit"
							className="p-2 px-3 bg-primary-dark font-normal text-white shadow-md rounded-xl hover:bg-opacity-80 focus:outline-none focus:bg-opacity-80"
						>
							Subscribe
						</button>
					</form>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
