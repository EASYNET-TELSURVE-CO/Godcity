// src/router/routes.js
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import PaymentPage from "../pages/PaymentPage";

const RouteConfig = [
	{ path: "/", element: Home },
	{
		path: "/dashboard",
		element: Dashboard,
	},
	{
		path: "/payment",
		element: PaymentPage,
	},
	// Add other routes here
];

export default RouteConfig;
