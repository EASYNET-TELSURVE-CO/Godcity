import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaymentForm from "../components/home/payment/PaymentForm";
import PaymentHistory from "../components/home/payment/PaymentHistory";

const PaymentPage = () => {
	const [showPaymentForm, setShowPaymentForm] = useState(true);
	const [showPaymentHistory, setShowPaymentHistory] = useState(false);
	const navigate = useNavigate();

	const handleTabChange = (tab) => {
		if (tab === "form") {
			setShowPaymentForm(true);
			setShowPaymentHistory(false);
		} else if (tab === "history") {
			setShowPaymentForm(false);
			setShowPaymentHistory(true);
		}
	};

	const handleBack = () => {
		navigate(-1); // Go back to the previous page
	};

	return (
		<div className="p-10 max-w-4xl mx-auto">
			

			<div className="mb-4">
				<button
					onClick={() => handleTabChange("form")}
					className={`py-2 px-4 rounded ${
						showPaymentForm ? "bg-primary text-white" : "bg-gray-200"
					}`}
				>
					Make a Payment
				</button>
				<button
					onClick={() => handleTabChange("history")}
					className={`py-2 px-4 rounded ${
						showPaymentHistory ? "bg-primary text-white" : "bg-gray-200"
					}`}
				>
					Payment History
				</button>
			</div>

			{showPaymentForm && <PaymentForm />}
			{showPaymentHistory && <PaymentHistory />}
		</div>
	);
};

export default PaymentPage;
