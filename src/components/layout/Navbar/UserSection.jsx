// src/components/Navbar/UserSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

const UserSection = ({
	isLoggedIn,
	isUserOpen,
	toggleUserDropdown,
	userDropdownRef,
	userDropdownItems,
}) => {
	const imageUrl =
		"https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
	const { user } = useAuth();
	return (
		<div>
			{isLoggedIn ? (
				<>
					<button
						className="flex text-sm bg-secondary rounded-full focus:ring-4 focus:ring-secondary"
						type="button"
						id="user-menu-button"
						aria-expanded={isUserOpen}
						data-dropdown-toggle="user-dropdown"
						data-dropdown-placement="bottom"
						onClick={toggleUserDropdown}
					>
						<span className="sr-only">Open user menu</span>
						<img
							className="w-8 h-8 rounded-full border border-gray-700"
							src={imageUrl}
							alt="user photo"
						/>
					</button>
					{/* User dropdown menu */}
					<div
						className={`z-50 ${
							isUserOpen ? "block" : "hidden"
						} border border-gray-500 absolute my-4 right-2 lg:right-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg dark:bg-gray-900 dark:divide-gray-700`}
						id="user-dropdown"
						ref={userDropdownRef}
					>
						<div className="px-4 py-3">
							<span className="block text-sm text-gray-900 dark:text-white">
								{user?.email.split("@")[0]}
							</span>
							<span className="block text-sm text-gray-500 truncate dark:text-gray-400">
								{user?.email}
							</span>
						</div>
						<ul className="py-2" aria-labelledby="user-menu-button">
							{userDropdownItems.map((item) => (
								<li key={item.to}>
									<Link
										to={item.to}
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200 dark:hover:text-white"
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</>
			) : (
				<Link to="http://godcity-dashboard.s3-website-eu-west-1.amazonaws.com/#/auth/signin">
					<button
						type="button"
						className="text-contrast dark:text-contrast-dark bg-none hover:bg-primary/85 focus:ring-4 focus:outline-none focus:ring-secondary font-medium rounded-xl shadow-md text-sm px-4 py-2.5 text-center dark:hover:bg-primary-dark/85 dark:focus:ring-primary hover:text-contrast-dark"
					>
						JOIN NOW
					</button>
				</Link>
			)}
		</div>
	);
};

export default UserSection;
