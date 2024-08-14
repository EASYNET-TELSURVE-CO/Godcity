// src/App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
	return (
		<Router>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={true}
				closeOnClick={false}
				rtl={false}
				draggable
				pauseOnFocusLoss
				theme="light"
			/>
			<Toaster />
			<div className="bg-background dark:bg-background-dark min-h-screen flex flex-col text-contrast dark:text-contrast-dark overflow-hidden scrollbar-hidden">
				<div className="flex-1 justify-center items-center font-bold text-center">
					<AppRouter />
				</div>
			</div>
		</Router>
	);
};

export default App;
