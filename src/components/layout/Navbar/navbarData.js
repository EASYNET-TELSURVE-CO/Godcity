// src/components/Navbar/navbarData.js
const menuItems = [
	{ label: "Home", section: "hero" },
	{ label: "Features", section: "features" },
	{ label: "Make Payment", section: "payment" },
	{ label: "Testimonials", section: "testimonials" },
	{ label: "Contact", section: "contact" },
];
const userDropdownItems = [
	{ to: "/profile", label: "Profile" },
	{ to: "/settings", label: "Settings" },
	{ to: "/logout", label: "Logout" },
];

const Items = [
	{ label: "Home", to: "/" },
	{ label: "Make Payment", to: "/payment" },
]

export { menuItems, userDropdownItems, Items };
