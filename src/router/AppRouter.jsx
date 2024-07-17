// src/router/appRoutes.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import RouteConfig from "./routes"; // Renamed to avoid naming conflicts
import CustomLayout from "../components/customlayout/CustomLayout";

const AppRoutes = () => {
	return (
		<Routes>
			{RouteConfig.map((route) => (
				<Route
					key={route.path}
					path={route.path}
					element={
						<CustomLayout>
							<route.element {...route.props} />
						</CustomLayout>
					} // Use JSX element instead of string
				/>
			))}
		</Routes>
	);
};

export default AppRoutes;
