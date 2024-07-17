// src/router/appRoutes.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import RouteConfig from "./routes"; // Renamed to avoid naming conflicts

const AppRoutes = () => {
	return (
		<Routes>
			{RouteConfig.map((route) => (
				<Route
					key={route.path}
					path={route.path}
					element={<route.element {...route.props} />} // Use JSX element instead of string
				/>
			))}
		</Routes>
	);
};

export default AppRoutes;