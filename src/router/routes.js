// src/router/routes.js
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

const RouteConfig = [
	{ path: "/", element: Home },
	{
		path: "/dashboard",
		element: Dashboard,
	},
	// Add other routes here
];

export default RouteConfig;
