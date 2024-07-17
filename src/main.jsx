import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/index.css";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { MemberProvider } from "./contexts/MemberContext.jsx";

const rootElement = document.getElementById("root");

// Create a root using ReactDOM.createRoot
if (!rootElement._reactRootContainer) {
	const root = ReactDOM.createRoot(rootElement);

	function Main() {
		return (
			<React.StrictMode>
				<AuthProvider>
					<ThemeProvider>
						<MemberProvider>
							<App />
						</MemberProvider>
					</ThemeProvider>
				</AuthProvider>
			</React.StrictMode>
		);
	}

	root.render(<Main />);
}
